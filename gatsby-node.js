/* To create our Markdown pages, we’ll learn to use two Gatsby APIs `onCreateNode`
and `createPages`. These are two workhorse APIs you’ll see used in many sites 
and plugins.
To implement an API, you export a function with the name of the API from 
gatsby-node.js */

/* Restart development server to see logs in terminal after making edits */

const path = require(`path`);
// Use gatsby-source-filesystem plugin to create slugs from file names
const { createFilePath } = require(`gatsby-source-filesystem`);

/* This function will be called by Gatsby whenever a new node is created (or 
updated). 
Add slugs for our Markdown pages to MarkdownRemark nodes. */

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    
    // Look only at MarkdownRemark nodes
    if (node.internal.type === `MarkdownRemark`) {
        // See newly created nodes logged to the terminal console
        // console.log(node.internal.type);

        // Traverse "node graph" to its parent `File` node, bc `File` nodes
        // contain data about files on disk.
        // const fileNode = getNode(node.parent);
        // Log relative paths for our Markdown files
        // console.log(`\n`, fileNode.relativePath)

        // Use function in gatsby-source-filename plugin to find the parent File
        // node and create the slug. 
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        // Add slugs to MarkdownRemark nodes. 
        // Use createNodeField function in Gatsby API. This function allows us 
        // to create additional fields on nodes created by other plugins.
        // GraphQL: "node": { "fields": { "slug": "/pandas-and-bananas/" } }
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                         slug: node.fields.slug,
                    },
                })
            })
            resolve();
        })
    })
};