import { defineConfig } from 'windicss/helpers';
import AspectRatio from 'windicss/plugin/aspect-ratio';
import Typography from 'windicss/plugin/typography';
import plugin from 'windicss/plugin';

const percentWidth = 'w-1/1 w-1/2 w-1/3 w-1/4 w-1/5 w-1/6 w-1/7 w-1/8 w-1/9 ';
const bbb = 'w-1/10 w-1/11 w-1/12';
export default defineConfig({
  attributify: {
    prefix: 'wd:',
  },
  darkMode: 'class',
  safelist: [percentWidth, bbb],
  shortcuts: {
    btn: 'cursor-pointer !outline-none',
    hstack: 'flex items-center',
    vstack: '',
    icon: 'w-6 h-6 fill-current',
    app: 'text-red',
    'app-border': 'border border-gray-200 dark:border-dark-300',
  },
  plugins: [
    AspectRatio,
    Typography({
      rtl: true,
    }),
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.32px') },
        h2: { fontSize: theme('fontSize.24px') },
        h3: { fontSize: theme('fontSize.20px') },
        h4: { fontSize: theme('fontSize.18px') },
        h5: { fontSize: theme('fontSize.15px') },
        h6: { fontSize: theme('fontSize.13px') },
      });
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '8%',
        // sx: '1.25rem',
        // sm: '1.5rem',
        // md: '1.75rem',
        // lg: '2rem',
        // xl: '2.25rem',
        xxl: '4rem',
      },
    },
    screens: {
      xs: '320px',
      sm: '375px',
      md: '390px',
      lg: '414px',
      xl: '640px',
      xxl: '768px',
      pcmd: '1024px',
      pclg: '1280px',
      pcxl: '1536px',
    },

    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
      ],
      roboto: ['Roboto'],
      robotoc: ['Roboto Condensed'],
      timesbold: ['Times Eighteen W01 Bold'],
    },
    extend: {
      fontSize: {
        '9px': '.5625rem',
        '10px': '.625rem',
        '11px': '.6875rem',
        '12px': '.75rem',
        '13px': '.8125rem',
        '14px': '.875rem',
        '15px': '.9375rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '22px': '1.375rem',
        '24px': '1.5rem',
        '26px': '1.625rem',
        '28px': '1.75rem',
        '30px': '1.875rem',
        '32px': '2rem',
        '36px': '2.25rem',
        '40px': '2.5rem',
      },
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        primary: '#',
        secondary: '#',
        accent: '#',
        neutral_light: '#',
        neutral_dark: '#',
      },
      textColor: {
        main: '#',
        link: '#',
        active: '#',
      },
      skew: {
        30: '30deg',
      },
      rotate: {
        60: '60deg',
      },
    },
  },
});
