import type { Page } from "@/types/next";

import * as markdown from "@/lib/markdown";

import ArticleLayout from "@/components/layout/ArticleLayout";
import Categories from "@/components/Categories";
import BackButton from "@/components/common/BackButton";
import ShareButtons from "@/components/common/ShareButtons";
import Typography from "@/components/common/Typography";

type Props = {
  post: any;
  content: string;
};

const Article: Page<Props> = ({ post, content }) => {
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
      <BackButton />
      <div className="bg-white text-black relative pt-10">
        <ShareButtons />
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
              <div className="ml-40 mr-80 my-14">
                <Typography content={content} />
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
