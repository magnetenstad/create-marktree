
# Welcome to marktree!
marktree is a static site generator, using markdown. It works great with GitHub pages. Thank you for giving it a try!

## Get started
1. Build your site
```
npm run build
```
5. Host the contents of `docs/`

## Functionality

### Connections
The links above are automatically generated!

### Markdown - extended

#### Basic markdown
1. First list item
2. Second item
   - Subitem

*Italics*, **Bold text**

And | tables
--- | ---
of | course.

#### Code highlighting
Both `inline('highlighting')` and 
```js
// Code blocks!
let count = 0;
count++;
console.log(`Count: ${count}`);
```
Enabled by [highlight.js](https://www.npmjs.com/package/highlight.js?activeTab=readme)

#### Maths
Both $\text{inline} + 1 + 2 + 3 + \dots$
and
$$
(\text{equations})^2 - \int_0^1x \: dx
$$
Enabled by [@iktakahiro/markdown-it-katex](https://www.npmjs.com/package/@iktakahiro/markdown-it-katex)

### Images
Here's a gull
![](images/gull.jpg)
