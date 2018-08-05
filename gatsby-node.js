/* To create our Markdown pages, we’ll learn to use two Gatsby APIs `onCreateNode`
and `createPages`. These are two workhorse APIs you’ll see used in many sites 
and plugins.
To implement an API, you export a function with the name of the API from 
gatsby-node.js */

/* This function will be called by Gatsby whenever a new node is created (or 
updated). */

exports.onCreateNode = ({ node }) => {
    console.log(node.internal.type);
};