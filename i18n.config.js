export default defineI18nConfig((nuxt) => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      heroHeading: 'Say goodbye to long, clunky links',
      heroSubheading:
        'Simplify your workflow, save time, and increase productivity with our streamlined link-sharing tool.',
      shortNow: 'Short now',
      seeMore: 'See more',
      homePage: 'Home page',
      aboutUs: 'About Us',
      contact: 'Kontakt',
      signOut: 'Sign out',
      signIn: 'Sign in',
    },
    fr: {
      heroHeading: 'Say goodbye to long, clunky links',
    },
    pl: {
      heroHeading: 'Pożegnaj się z długimi linkami',
      heroSubheading:
        'Dzielenie się linkami jeszcze nigdy nie było takie proste - skorzystaj z naszego narzędzia do skracania linków już dziś',
      shortNow: 'Skróć teraz',
      seeMore: 'Dowiedz się więcej',
      homePage: 'Strona główna',
      aboutUs: 'O nas',
      contact: 'Kontakt',
      signOut: 'Wyloguj się',
      signIn: 'Zaloguj się',
    },
  },
}))
