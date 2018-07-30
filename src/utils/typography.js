// Typography.js CSS
/* 
Typography.js is a JavaScript library which generates typographic CSS.
Instead of directly setting the font-size of different HTML elements, you tell 
Typography.js things like your desired baseFontSize and baseLineHeight and based 
on these, it generates the base CSS for all your elements.
In the generated HTML, the Typography plugin will add a <style> element to the 
<head> element with its generated CSS.
*/

import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

// Use Kirkham theme
const typography = new Typography(kirkhamTheme);

export default typography;