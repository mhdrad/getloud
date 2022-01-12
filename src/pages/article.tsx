import type { PageWithLayout } from "@/types/next";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "framer-motion";

import * as markdown from "@/lib/markdown";

import ArticleLayout from "@/components/layout/ArticleLayout";
import Categories from "@/components/Categories";

type Props = {
  post: any;
  content: string;
};

const Article: PageWithLayout<Props> = ({ post, content }) => {
  const [curserX, setCurserX] = useState(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleBackButtonMotion);

    return () => {
      window.removeEventListener("mousemove", handleBackButtonMotion);
    };
  }, []);

  const handleBackButtonMotion = ({ pageX: x, pageY: y }: MouseEvent) => {
    // object follow mouse curser only in header
    if (y < 40) {
      let objX = x;
      // dont let the object go outside
      if (objX - 80 < 0) objX = 100;
      if (objX + 80 > window.innerWidth) objX = window.innerWidth - 100;

      setCurserX(objX - 100);
    }
  };

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
      <div className="h-10 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href={"/"}>
          <Motion.a
            className="text-gray-dark h-10 px-4 flex items-center opacity-40 transition-opacity hover:text-white hover:opacity-90"
            href="#"
            style={{ x: "50%" }}
            animate={{ x: curserX }}
            transition={{ ease: "linear", duration: 0.2 }}
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
          </Motion.a>
        </Link>
      </div>
      <div className="bg-white text-black relative pt-10">
        <div className="container mx-auto">
          <div className="flex">
            <div className="absolute top-10 left-10 grid grid-rows-4 gap-4">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-30"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
            </div>

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
