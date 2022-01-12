import type { CustomAppProps } from "@/types/next";

import { withTRPC } from "@trpc/next";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import superjson from "superjson";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";

import { AppRouter } from "@/server/routers/_app";

import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const Layout = Component.Layout;
  return (
    <Layout>
      <>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
        {process.env.NODE_ENV !== "production" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </>
    </Layout>
  );
};

function getBaseUrl() {
  // if in browser
  if (process.browser) {
    return "";
  }

  // if hosted by vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // otherwise assume as localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        // Adds pretty logs to console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      // Make trpc able to parse Date, Map and Set data types between the server and client we use superjson
      transformer: superjson,
    };
  },

  // Enable Server Side Rendering hooks in trcp
  ssr: true,

  // Set headers or status code when doing SSR
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    // OPTIMIZE: For api caching with SSR see https://trpc.io/docs/caching
    return {};
  },
})(MyApp);
