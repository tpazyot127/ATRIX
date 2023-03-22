import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";

import { footerNavigation, headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import NavLink from "../NavLink";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useScrollPosition(({ currPos }) => {
    setHeaderStyle(currPos.y <= -2);
  });

  return (
    <header
      className={cn(
        {
          [styles.visible]: headerStyle,
          [styles.open]: open,
        },
        styles.header
      )}
    >
      <div
        className={cn("container-wide", styles.container)}
        data-scroll-lock-scrollable
        data-scroll-lock-fill-gap
      >
        <Logo className={styles.logo} />

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
            ) : link.title === "Community" ? (
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                href={"#footer"}
                key={index}
              >
                {link.title}
              </NavLink>
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
          <span>White paper</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
