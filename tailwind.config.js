const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['ui-serif', 'Georgia', 'Iowan Old Style', 'Times New Roman', 'serif'],
        mono: [
          'ui-monospace',
          'SF Mono',
          'Cascadia Mono',
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        // "Lab Notebook" palette — warm paper ground, graphite ink, a single
        // muted teal accent, and a copper highlight used sparingly for emphasis.
        paper: '#F6F4EE',
        'paper-dark': '#14140F',
        card: '#FFFEFA',
        'card-dark': '#1A1A14',
        ink: '#23241F',
        'ink-dark': '#EDEAE0',
        'ink-soft': '#5B5A4E',
        'ink-soft-dark': '#A9A594',
        rule: '#D9D4C2',
        'rule-dark': '#35342A',
        accent: '#2B6E6E',
        'accent-dark': '#5FB3B3',
        'accent-soft': '#E4EEEC',
        'accent-soft-dark': '#1B2C2A',
        highlight: '#A8763E',
        'highlight-dark': '#D6A36B',
        gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink-soft'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent'),
              },
              code: { color: theme('colors.accent') },
            },
            h1: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.ink'),
            },
            h2: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.ink'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.ink'),
            },
            'h4,h5,h6': {
              color: theme('colors.ink'),
            },
            pre: {
              backgroundColor: theme('colors.ink'),
            },
            code: {
              color: theme('colors.accent'),
              backgroundColor: theme('colors.accent-soft'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.accent-soft'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.rule') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.ink-soft'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.ink-soft'),
            },
            strong: { color: theme('colors.ink') },
            blockquote: {
              color: theme('colors.ink'),
              borderLeftColor: theme('colors.highlight'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.ink-soft-dark'),
            a: {
              color: theme('colors.accent-dark'),
              '&:hover': {
                color: theme('colors.accent-dark'),
              },
              code: { color: theme('colors.accent-dark') },
            },
            h1: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.ink-dark'),
            },
            h2: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.ink-dark'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.ink-dark'),
            },
            'h4,h5,h6': {
              color: theme('colors.ink-dark'),
            },
            pre: {
              backgroundColor: theme('colors.card-dark'),
            },
            code: {
              backgroundColor: theme('colors.accent-soft-dark'),
            },
            details: {
              backgroundColor: theme('colors.accent-soft-dark'),
            },
            hr: { borderColor: theme('colors.rule-dark') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.ink-soft-dark'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.ink-soft-dark'),
            },
            strong: { color: theme('colors.ink-dark') },
            thead: {
              th: {
                color: theme('colors.ink-dark'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.rule-dark'),
              },
            },
            blockquote: {
              color: theme('colors.ink-dark'),
              borderLeftColor: theme('colors.highlight-dark'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
