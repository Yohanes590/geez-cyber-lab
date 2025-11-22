import nunjucks from "nunjucks";

nunjucks.configure({ autoescape: false });
// autoescape: false = IMPORTANT for SSTI vulnerability

export default nunjucks;
