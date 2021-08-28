module.exports = {
  siteMetadata: {
    title: `Veggie Foodie`,
    description: `Landpage for mobile app Veggie Foodie.`,
    author: `@marianapatcosta`,
    authorName: `Mariana Costa`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `pt`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
          {
            matchPath: "/preview",
            languages: ["en"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#005b71`,
        theme_color: `#005b71`,
        display: `minimal-ui`,
        icon: `src/images/veggie-foodie-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`benne`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-RMGEYTMRL4",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
          allowAdFeatures: false,
        },
        environments: ["production", "development"],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      // only added to exclude styles.js files in pages folder, to avoid build error
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["**/styles.js", "**/styles.jsx"],
      },
    },
  ],
}
