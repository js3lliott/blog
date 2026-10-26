/* Portfolio v3 — progressive enhancement only.
   Everything below is optional: the page is complete without JavaScript. */

;(function () {
  'use strict'

  document.documentElement.classList.add('js')

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* ---------- Toronto clock (real, computed locally) ---------- */
  var clockEl = document.querySelector('[data-clock]')
  if (clockEl) {
    var formatter
    try {
      formatter = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Toronto',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    } catch (err) {
      formatter = null
    }

    var tick = function () {
      var now = new Date()
      clockEl.textContent = formatter
        ? formatter.format(now)
        : String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0')
    }

    tick()
    window.setInterval(tick, 20000)
  }

  /* ---------- Tenure in current role (real math, no invented figures) ---------- */
  var tenureEl = document.querySelector('[data-tenure]')
  if (tenureEl) {
    var start = new Date(2025, 8, 1) // September 2025
    var now = new Date()
    var months =
      (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
    if (months < 0) months = 0

    var years = Math.floor(months / 12)
    var rem = months % 12
    var parts = []
    if (years > 0) parts.push(years + ' yr')
    if (rem > 0 || years === 0) parts.push(rem + ' mo')
    tenureEl.textContent = parts.join(' ')
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector('[data-year]')
  if (yearEl) yearEl.textContent = String(new Date().getFullYear())

  /* ---------- Copy email ---------- */
  var copyBtn = document.querySelector('[data-copy]')
  if (copyBtn && navigator.clipboard) {
    copyBtn.hidden = false
    var labelEl = copyBtn.querySelector('[data-copy-label]')
    var resetTimer = null

    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(copyBtn.getAttribute('data-copy')).then(
        function () {
          if (labelEl) labelEl.textContent = 'Copied'
          copyBtn.setAttribute('data-copied', 'true')
          window.clearTimeout(resetTimer)
          resetTimer = window.setTimeout(function () {
            if (labelEl) labelEl.textContent = 'Copy address'
            copyBtn.removeAttribute('data-copied')
          }, 2200)
        },
        function () {
          if (labelEl) labelEl.textContent = 'Copy failed — select manually'
        }
      )
    })
  } else if (copyBtn) {
    copyBtn.hidden = true
  }

  /* ---------- Work filters ---------- */
  var filterBar = document.querySelector('[data-filters]')
  var studies = Array.prototype.slice.call(document.querySelectorAll('.study'))
  var countEl = document.querySelector('[data-work-count]')

  if (filterBar && studies.length) {
    filterBar.hidden = false
    var buttons = Array.prototype.slice.call(filterBar.querySelectorAll('button'))

    filterBar.addEventListener('click', function (event) {
      var btn = event.target.closest('button[data-filter]')
      if (!btn) return

      var filter = btn.getAttribute('data-filter')
      var shown = 0

      studies.forEach(function (study) {
        var match = filter === 'all' || study.getAttribute('data-category') === filter
        study.hidden = !match
        if (match) shown++
      })

      buttons.forEach(function (other) {
        other.setAttribute('aria-pressed', String(other === btn))
      })

      if (countEl) countEl.textContent = String(shown)
    })
  }

  /* ---------- Panel reveal ----------
     The reveal is decoration. Content must never be left hidden because an
     observer misfired, so everything force-reveals shortly after load. */
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'))

  var revealAll = function () {
    panels.forEach(function (panel) {
      panel.classList.add('is-visible')
    })
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll()
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    )

    panels.forEach(function (panel) {
      observer.observe(panel)
    })

    window.setTimeout(function () {
      revealAll()
      observer.disconnect()
    }, 1600)
  }
})()
