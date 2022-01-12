import type { PageWithLayout } from "@/types/next";

import ArticleLayout from "@/components/layout/ArticleLayout";

import Categories from "@/components/Categories";
import * as markdown from "@/lib/markdown";

const Article: PageWithLayout = ({ post, content }: any) => {
  // const posts = trpc.useQuery(["post.all"]);

  const categories = [
    {
      title: "HTML",
      slug: "html",
    },
    {
      title: "CSS",
      slug: "css",
    },
    {
      title: "JavaScript",
      slug: "javascript",
    },
    {
      title: "Node.js",
      slug: "nodejs",
    },
  ];
  return (
    <div className="p-10 pt-0">
      <div className="h-10 relative">
        <a
          href="#"
          className="text-gray-dark h-10 px-4 flex items-center absolute left-1/2 opacity-40 transition-opacity hover:text-white hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 inline-block mr-[12px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </a>
      </div>
      <div className="bg-white text-black pt-10">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-1">
              <div>
                <span className="text-orange">CSS</span>
                <span className="ml-4">August,3</span>
              </div>
              <h1 className="text-6xl leading-snug mr-56 mt-4">
                Breaking to a new row with flexbox
              </h1>
              <div className="prose ml-40 mr-80 my-14">
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>

            <div className="w-24">
              <Categories
                lightMode
                homeTitle="All posts"
                items={categories}
                currentSlug={null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Article.Layout = ArticleLayout;

export async function getStaticProps() {
  // get article content
  const post = {
    description:
      "## Contents\n\
\n\
- [Demo](https://blueimp.github.io/JavaScript-Templates/)\n\
- [Description](#description)\n\
- [Usage](#usage)\n\
  - [Client-side](#client-side)\n\
  - [Server-side](#server-side)\n\
- [Requirements](#requirements)\n\
- [API](#api)\n\
  - [tmpl() function](#tmpl-function)\n\
  - [Templates cache](#templates-cache)\n\
  - [Output encoding](#output-encoding)\n\
  - [Local helper variables](#local-helper-variables)\n\
  - [Template function argument](#template-function-argument)\n\
  - [Template parsing](#template-parsing)\n\
- [Templates syntax](#templates-syntax)\n\
  - [Interpolation](#interpolation)\n\
  - [Evaluation](#evaluation)\n\
- [Compiled templates](#compiled-templates)\n\
- [Tests](#tests)\n\
- [License](#license)\n\
\n\
## Description\n\
\n\
1KB lightweight, fast & powerful JavaScript `templating` engine with zero\n\
dependencies.  \n\
Compatible with server-side environments like [Node.js](https://nodejs.org/),\n\
module loaders like [RequireJS](https://requirejs.org/) or\n\
[webpack](https://webpack.js.org/) and all web browsers.\n\
\n\
## Usage\n\
\n\
### Client-side\n\
\n\
Install the **blueimp-tmpl** package with [NPM](https://www.npmjs.org/):\n\
\n\
```sh\n\
npm install blueimp-tmpl\n\
```\n\
\n\
Include the (minified) JavaScript Templates script in your HTML markup:\n\
\n\
```CSS\n\
.some {\n\
  background-color: 'red';\n\
}\n\
```\n\
\n\
Add a script section with type **'text/x-tmpl'**, a unique **id** property and\n\
your template definition as content:\n\
\n\
```html\n\
<script type='text/x-tmpl' id='tmpl-demo'>\n\
  <h3>{%=o.title%}</h3>\n\
  <p>Released under the\n\
  <a href='{%=o.license.url%}'>{%=o.license.name%}</a>.</p>\n\
  <h4>Features</h4>\n\
  <ul>\n\
  {% for (var i=0; i<o.features.length; i++) { %}\n\
      <li>{%=o.features[i]%}</li>\n\
  {% } %}\n\
  </ul>\n\
</script>\n\
```",
  };

  const content = await markdown.convertToHtml(post.description || "");

  return {
    props: {
      post: {
        ...post,
      },
      content,
    },
  };
}

export default Article;
