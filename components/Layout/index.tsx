import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import HeaderApp from "@/components/HeaderApp";

import Footer from "@/components/Footer";
import { APP_ROUTE } from "@/utils/commom";

type LayoutProps = {
  layoutNoOverflow?: boolean;
  children: React.ReactNode;
  route: string;
  layoutWhite?: boolean;
};

const Layout = ({
  layoutNoOverflow,
  children,
  route,
  layoutWhite,
}: LayoutProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    clearQueueScrollLocks();
    enablePageScroll();
  }, [pathname]);

  return (
    <>
      <Head>
        <title>ATRIX</title>
      </Head>
      {route === APP_ROUTE ? (
        <div
          className={cn(styles.layout, {
            [styles.layoutNoOverflow]: layoutNoOverflow,
            [styles.layoutWhite]: layoutWhite,
          })}
        >
          <HeaderApp />
          {children}
          <Footer FooterApp />
        </div>
      ) : (
        <div
          className={cn(styles.layout, {
            [styles.layoutNoOverflow]: layoutNoOverflow,
          })}
        >
          <Header />
          {children}
          <Footer FooterApp={false} />
        </div>
      )}
    </>
  );
};

export default Layout;
