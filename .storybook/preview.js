export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'White',
        value: '#ffffff',
      },
      {
        name: 'Light grey',
        value: '#f2f2f2',
      },
      {
        name: 'Dark grey',
        value: '#3c3c3c',
      },
    ],
  },
}