# enforcing-html-best-practices
Enforcing HTML best practices with 11ty, by using macros 

## Files and folder
```
.
├── _data
├── _includes
│   ├── components
│   ├── layouts
│   └── partials
└── content
```

- /components: based on Nunjuck macros and contain standard components such as buttons or cards
- /parials: parts used to construct the HTML document, only retrieve data globally available
- /layouts: 


## Attribution

- [Jerome Coupé Eleventy Structure](https://www.webstoemp.com/blog/eleventy-projects-structure/)
- [Trys Mudford](https://www.trysmudford.com/blog/encapsulated-11ty-components/)

## Documentation

The base.layout.njk expose all the components and make it possible to reuse them inside any page extending it.

### Components
