import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['nunito-sans']
      },
      fontSize: {
        'd-h1': ['56px', '110%'],
        'd-h2': ['48px', '120%'],
        'd-h3': ['32px', '120%'],
        'd-h4': ['24px', '120%'],
        'd-h5': ['18px', '120%'],
        'd-b1': ['18px', '140%'],
        'd-b2': ['16px', '140%'],
        't-h1': ['48px', '110%'],
        't-h2': ['32px', '120%'],
        't-h3': ['24px', '120%'],
        't-h4': ['18px', '120%'],
        't-h5': ['16px', '120%'],
        't-b1': ['16px', '130%'],
        't-b2': ['14px', '130%'],
        'm-h1': ['24px', '120%'],
        'm-h2': ['20px', '120%'],
        'm-h3': ['18px', '120%'],
        'm-h4': ['16px', '120%'],
        'm-h5': ['14px', '120%'],
        'm-b1': ['16px', '130%'],
        'm-b2': ['14px', '130%'],
        'button-lg': ['20px', '24px'],
        'button-normal': ['20px', '24px'],
        'button-medium': ['16px', '20px'],
        'button-small': ['14px', '16px'],
        'button-xs': ['14px', '16px'],
        'text-placeholder': ['16px', '24px'],
        'text-title': ['12px', '16px'],
        'text-description': ['12px', '16px'],
      }
    },
    colors: {
      'primary': '#00563B',
      'success': '#219E3F',
      'info': '#0153AA',
      'warning': '#AD660A',
      'danger': '#9B185C',
      'primary-900': '#13412F',
      'primary-800': '#19553E',
      'primary-700': '#256A4F',
      'primary-600': '#377F61',
      'primary-500': '#4D9475',
      'primary-400': '#68A88B',
      'primary-300': '#86BCA2',
      'primary-200': '#A6D0BB',
      'primary-100': '#C9E3D6',
      'primary-50': '#EDF6F1',
      'success-900': '#00450B',
      'success-800': '#005A0E',
      'success-700': '#007018',
      'success-600': '#008528',
      'success-500': '#209A3E',
      'success-400': '#4AAF58',
      'success-300': '#70C377',
      'success-200': '#98D59A',
      'success-100': '#C1E7C0',
      'success-50': '#EAF7EA',
      'info-900': '#15386F',
      'info-800': '#194991',
      'info-700': '#285CB0',
      'info-600': '#3F6FCB',
      'info-500': '#5B83E0',
      'info-400': '#7998F0',
      'info-300': '#97AEFA',
      'info-200': '#B6C4FF',
      'info-100': '#D4DBFF',
      'info-50': '#F1F3FF',
      'warning-900': '#592F00',
      'warning-800': '#733E00',
      'warning-700': '#8E4F00',
      'warning-600': '#A76102',
      'warning-500': '#BE7521',
      'warning-400': '#D38B40',
      'warning-300': '#E5A362',
      'warning-200': '#F2BC8A',
      'warning-100': '#FBD6B6',
      'warning-50': '#FFF1E6',
      'danger-900': '#691A40',
      'danger-800': '#892254',
      'danger-700': '#A72F68',
      'danger-600': '#C1427D',
      'danger-500': '#D85A91',
      'danger-400': '#EA75A5',
      'danger-300': '#F791B9',
      'danger-200': '#FFB0CD',
      'danger-100': '#FFCFE1',
      'danger-50': '#FFEFF5',
    }
  },
  plugins: [],
};
export default config;
