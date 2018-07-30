module.exports = {
    // Tell Gatsby to look for these plugins
    plugins: [
        `gatsby-plugin-glamor`,
        {
            resolve: `gatsby-plugin-typography`,
            // Set Typography plugin to use custom `typography` module 
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};