import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./HeaderApp.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";

import { footerNavigation, headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import NavLink from "../NavLink";

type HeaderAppProps = {};

const HeaderApp = ({}: HeaderAppProps) => {
  return (
    <header className={cn(styles.header)}>
      <div className={cn("container-wide", styles.container)}>
        <Logo white className={styles.logo} />

        <div className={styles.menu}>
          {headerNavigation.map((link, index) =>
            link.external ? (
              <a
                className={styles.link}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {link.title}
              </a>
            ) : (
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                href={link.url}
                key={index}
              >
                {link.title}
              </NavLink>
            )
          )}
        </div>
        {/* <Menu
                    navigation={headerNavigation}
                    socials={socials}
                    onClick={() => setOpen(!open)}
                /> */}
        <a
          className={cn("button", styles.button)}
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Connect wallet</span>
        </a>
      </div>
    </header>
  );
};

export default HeaderApp;
