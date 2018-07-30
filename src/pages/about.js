import React from "react";

// Query site metadata with `data`
export default ({ data }) =>
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>

/* 
graphql-tagged template
(A tagged template is a function call that uses a template literal to get its 
arguments.)
Use tag function (tagged template) called graphql. 
We can use `graphql` tag function without importing a `graphql` tag bc during the 
Gatsby build process, GraphQL queries are pulled out of the original source for 
parsing.
*/

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`