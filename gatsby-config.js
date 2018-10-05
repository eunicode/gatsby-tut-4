// Restart development server when you make changes to config file

module.exports = {
    // Site metadata
    siteMetadata: {
        title: `~Title Variable~`,
    },
    // Tell Gatsby to look for these plugins
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-typography`,
            // Set Typography plugin to use custom `typography` module 
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "minimal-ui",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
          },
    ],
    pathPrefix: `gatsby-tut-4`
};