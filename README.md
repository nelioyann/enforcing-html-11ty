# enforcing-html-best-practices
Enforcing HTML best practices with 11ty, by using macros 

## Files and folder
- src/_includes: 
- src/_includes/components: based on Nunjuck macros and contain standard components such as buttons or cards
- src/_includes/parials: parts used to construct the HTML document, only retrieve data globally available
- src/_includes/layouts: 


## Attribution

- [Jerome Coupé Eleventy Structure](https://www.webstoemp.com/blog/eleventy-projects-structure/)
- [Trys Mudford]()

## Documentation

The base.layout.njk expose all the components and make it possible to reuse them inside any page extending it.

### Components

- /{{name}}
- /{{name}}/{{name}}.component.njk
- /{{name}}/{{name}}.macro.njk