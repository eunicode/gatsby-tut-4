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
    ],
    pathPrefix: `gatsby-tut-4`
};