import type { Page } from "@/types/next";
import { useRouter } from "next/router";

import * as markdown from "@/lib/markdown";

import DefaultLayout from "@/components/layout/DefaultLayout";
import ArticleModal from "@/components/ArticleModal";
import BackButton from "@/components/common/BackButton";

type Props = {
  post: any;
  content: string;
};

const Article: Page<Props> = ({ post, content }) => {
  const router = useRouter();

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
    <div>
      <div className="overflow-hidden">
        <BackButton
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        />
      </div>
      <ArticleModal post={post} content={content} categories={categories} />
    </div>
  );
};

Article.Layout = DefaultLayout;

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
