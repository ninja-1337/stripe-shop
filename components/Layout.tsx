import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "./header";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "EasySec Shop" }: Props) => (
  <>
    <Header></Header>
    <div className="container">{children}</div>
  </>
);

export default Layout;
