import type { NextPage } from "next";
import type { AppProps } from "next/app";

import type { FC } from "react";

declare type CustomAppProps = AppProps & { Component: { Layout: FC } };
declare type PageWithLayout<T = {}> = NextPage<T> & { Layout: FC };
