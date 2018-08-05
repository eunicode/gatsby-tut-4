/* To create our Markdown pages, we’ll learn to use two Gatsby APIs `onCreateNode`
and `createPages`. These are two workhorse APIs you’ll see used in many sites 
and plugins.
To implement an API, you export a function with the name of the API from 
gatsby-node.js */

/* Restart development server to see logs in terminal after making edits */

/* This function will be called by Gatsby whenever a new node is created (or 
updated). 
Add slugs for our Markdown pages to MarkdownRemark nodes. */

exports.onCreateNode = ({ node, getNode }) => {
    // Look only at MarkdownRemark nodes
    if (node.internal.type === `MarkdownRemark`) {
        // See newly created nodes logged to the terminal console
        // console.log(node.internal.type);
        // Traverse "node graph" to its parent `File` node, bc `File` nodes
        // contain data about files on disk.
        const fileNode = getNode(node.parent);
        // Log relative paths for our Markdown files
        console.log(`\n`, fileNode.relativePath)
    }
};