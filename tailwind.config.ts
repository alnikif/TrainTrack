import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': { max: '1728px' },
        '2xl': { max: '1512px' },
        xl: { max: '1280px' },
        xlx: { max: '1280px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        mdx: { max: '768px' },
        sm: { max: '480px' },
        smx: { max: '480px' },
        xs: { max: '375px' },
        xsx: { max: '375px' },
      },
      backgroundImage: {
        login: "url('/login/login-background.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#808080',
        secondary: '#D9D9D9',
        tertiary: '#2E2E2E',
        quaternary: '#121926',
        quinary: '#697586',
        sidebarProfile: 'rgba(54, 65, 82, 0.15)',
        profileData: 'rgb(249,251,253)',
        bgBtn: {
          primary: '#FEC903',
          secondary: '',
          lightGreen: '#c9e3d6',
        },
      },
      textColor: {
        primary: '#808080',
        secondary: '#D9D9D9',
        tertiary: '#2E2E2E',
        formError: '#D84C10',
        quaternary: '#121926',
        quinary: '#697586',
        textBtn: {
          primary: '#242424',
          secondary: '',
        },
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        darkYellow: '#FEC903',
        lightGray: '#D8D8D8',
        blueMist: '#E0E5F2',
        charcoalGray: '#242424',
        gray: '#979797',
        darkGray: '#383838',
        gray700: '#364152',
        bg700: 'rgba(0, 0, 0, 0.7)',
        yellow: '#FEC903',
        green: '#61C478',
        columbiaBlue: '#CDD5DF',
        brightGray: '#E3E8EF',
        charcoal: '#39465B',
        lotion: '#FCFCFD',
        yankeesBlue: '#202939',
        richBlack: '#030C1F',
        eerieBlack: '#1d1d1d',
        independence: '#4B5565',
        isabelline: '#EEF2F6',
        antiFlashWhite: '#F3F4F6',
        cultured: '#F4F7F9',
        ghostWhite: '#F8FAFC',
        gray800: '#9AA4B2',
        grayWhite: '#eeeeee',
        blue: 'rgba(52, 168, 83, 0.05)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }: any) {
      addComponents({
        '.formError': {
          '@apply text-formError text-xs': {},
        },
        '.formLabelLogin': {
          '@apply font-poppins text-sm font-medium text-white leading-[100%] -tracking-[0.28px] mb-2.5': {},
        },
        '.formLabel': {
          '@apply font-manrope text-sm text-primary leading-[175%] mb-2 smx:mb-1': {},
          '@apply font-manrope text-sm text-primary leading-[175%] mb-2': {},
        },
      })
    }),
  ],
}
export default config
