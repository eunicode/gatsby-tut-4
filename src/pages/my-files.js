import React from "react";

export default ({ data }) => {
  // Console out the data you get from query  
  console.log(data);
  return (
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );    
}

// First sketch out the data query in GraphiQL
// You will get an array of File “nodes” (node is a fancy name for an object in 
// a “graph”). Each File object has the fields we queried for.

/*
{
  "data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "relativePath": "pages/about.js",
            "prettySize": "789 B",
            "extension": "js",
            "birthTime": "2018-07-30T01:24:24.324Z"
          }
        },
        {
          "node": {
            "relativePath": "pages/index.js",
            "prettySize": "450 B",
            "extension": "js",
            "birthTime": "2018-07-30T05:59:13.116Z"
          }
        }
      ]
    }
  }
}
*/

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
