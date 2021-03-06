module.exports = function(eleventyConfig) {
    
    const katex = require('katex');
    const markdownIt = require('markdown-it');
    const markdownItOptions = {
        html: true,
        linkify: true
    };
    
    const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-mark'))
    .use(function(md) {
        // Recognize Mediawiki links ([[text]])
        md.linkify.add("[[", {
            validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
            normalize: match => {
                const parts = match.raw.slice(2,-2).split("|");
                parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                match.text = (parts[1] || parts[0]).trim();
                match.url = `/notes/${parts[0].trim()}/`;
            }
        })
    })
    md.render('==marked==') // => '<p><mark>marked</mark></p>'
    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })
    eleventyConfig.addFilter('math', content => {
        return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
          const cleanEquation = equation
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
      
          return katex.renderToString(cleanEquation, { throwOnError: false })
        })
      })
    eleventyConfig.setLibrary('md', md);
    
    eleventyConfig.addCollection("notes", function (collection) {
        return collection.getFilteredByGlob(["notes/**/*.md", "index.md"]);
    });
    
    eleventyConfig.addPassthroughCopy('assets');

    return {
        useGitIgnore: false,
        dir: {
            input: "./",
            output: "_site",
            layouts: "layouts",
            includes: "includes",
            data: "_data"
        },
        passthroughFileCopy: true
    }
}