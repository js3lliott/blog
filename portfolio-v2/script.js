;(() => {
  const filters = document.querySelector('.filters')
  const buttons = [...document.querySelectorAll('[data-filter]')]
  const projects = [...document.querySelectorAll('[data-category]')]
  const count = document.querySelector('.work-count')

  function filterProjects(category) {
    let visible = 0
    projects.forEach((project) => {
      const matches = category === 'all' || project.dataset.category.split(' ').includes(category)
      project.hidden = !matches
      if (matches) visible += 1
    })
    buttons.forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.filter === category))
    )
    count.textContent = String(visible).padStart(2, '0') + ' projects'
  }

  filters.hidden = false
  buttons.forEach((button) =>
    button.addEventListener('click', () => filterProjects(button.dataset.filter))
  )

  function openLinkedProject() {
    // Look up the fragment as an ID, never as a selector or markup.
    let id
    try {
      id = decodeURIComponent(window.location.hash.slice(1))
    } catch {
      return
    }
    const target = document.getElementById(id)
    if (!target || target.tagName !== 'DETAILS') return
    const project = target.closest('[data-category]')
    if (project && project.hidden) filterProjects('all')
    target.open = true
    target.scrollIntoView({ block: 'start' })
  }
  window.addEventListener('hashchange', openLinkedProject)
  document.querySelectorAll('.project-art').forEach((link) => {
    link.addEventListener('click', () => {
      const detail = document.getElementById(link.hash.slice(1))
      if (detail) detail.open = true
    })
  })
  openLinkedProject()

  const copyButton = document.querySelector('.copy-email')
  const copyStatus = document.querySelector('.copy-status')
  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('jordan.samek@gmail.com')
        copyStatus.textContent = 'Email copied.'
      } catch {
        copyStatus.textContent = 'Please select the email address to copy it.'
      }
    })
  }
  document.querySelector('[data-year]').textContent = new Date().getFullYear()
})()
