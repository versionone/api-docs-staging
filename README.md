- [ ] Toc group expansion
- [ ] Update url when scrolling
- [ ] Update Toc position when scrolling
- [ ] Update toc expansion when scrolling
- [ ] Copy codeblock


## Getting Started

```
git clone <repo>
cd repo

npm install

npm start
```

## Directory structure

```
src
|-- components                      
|-- images                          # images that can appear in the content
|-- markdown-pages
    |-- order.js                    # Keep track of order of the table of contents
    |-- sectionDirectory/           # represents all the sections within an item in the table of contents
        |-- index.md                # First content to be shown in the section
        |-- order.js                # (optional) keep track of order of subsections
        |-- subSectionDirectory/    # represents all the sub sections within the table of contents
            |-- index.md            # content of the subsection
            |-- sdk/                # all the language specific examples.
                |-- bash.md
                |-- csharp.md
                |-- js.md
                |-- python.md
|-- pages                           # Entry point and (404, 4XX Pages)
```