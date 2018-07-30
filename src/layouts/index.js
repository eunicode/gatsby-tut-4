import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

/* 
Typography.js provides a way to base all spacings on a new dynamic unit called 
rhythm, so you don't have to hand-pick margins, paddings, etc.
The rhythm unit is taken from the line-height. One rhythm equals one line-height. 
When you change your line-height, every other spacing in your site will respond 
in turn.
When building a site with inline styles or css-in-js, you can import your 
typography object and use the provided rhythm function.
*/

import { rhythm } from "../utils/typography";

/*
Glamor - CSS-in-JS library
https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-glamor
https://github.com/threepointone/glamor
The Gatsby Glamor plugin provides drop-in support for using the css-in-js library 
Glamor, including optimized server rendering.
Glamor lets you write real CSS inline in your components using the same Object 
CSS syntax React supports for the style prop. 
One of the most important problems CSS-in-JS libraries solve is selector name 
collisions. CSS selectors are scoped automatically to their component. Styles are 
tightly coupled with their components. 
Make CSS rules. Add as data attributes or classes. 
*/

const linkStyle = css({ float: `right` });

/*
Glamorous
https://github.com/paypal/glamorous 
Glamorous is a CSS-in-JS library that wraps the glamor library (uses
glamor under the hood), and has an API that's similar to styled-components', but 
uses JavaScript syntax rather than interpolated strings. 
Dynamic props are a big win for this library over others, as is themeing.
It is used to create styled React components using JavaScript syntax.
With glamorous, instead of the normal CSS syntax you maybe familiar with, we use 
regular JavaScript objects.
*/

/*
gatsby-link
A <Link> component for Gatsby. It's a wrapper around React Router's Link component 
that adds enhancements specific to Gatsby. All props are passed through to React 
Router's Link.
*/

export default ({ children }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        Pandas Eating Lots
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </g.Div>
);