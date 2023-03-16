import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import { APP_NAME } from "@/utils/commom";

import { description } from "@/mocks/description";
const images = [
  "/images/figures/figure-1.png",
  "/images/figures/figure-2.png",
  "/images/figures/figure-3.png",
  "/images/figures/figure-4.png",
  "/images/figures/figure-5.png",
  "/images/figures/figure-6.png",
];

type MainProps = {
  scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.head}>
        <div className={styles.infoHeader}>
          {APP_NAME} Using proof of stake algorithm and scaling solution ZKP
          (Zero Knowledge Proofs)
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image
            src="/images/lines.svg"
            width={1578}
            height={1585}
            alt="Lines"
          />
        </div>
        {images.map((image, index) => (
          <Parallax
            className={styles.image}
            speed={1}
            easing="easeInQuad"
            rotate={index === 2 ? [2, -10] : [-4, 15]}
            key={index}
          >
            <Image src={image} layout="fill" alt="Figure" />
          </Parallax>
        ))}
      </div>
      <div>
        <div className={styles.stage}>WHY {APP_NAME}</div>
        <div className={cn("h3", styles.title)}>
          Speed, security, scalability
        </div>

        <div className={styles.info}>
          {APP_NAME} aBFT consensus protocol delivers unparalleled speed,
          security, and reliability. Enjoy almost instant transactions and
          extremely low fees.
        </div>
      </div>

      <div className={styles.list}>
        {description.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>
              <Image
                src={item.icon}
                width={50}
                height={50}
              />
            </div>
            <div className={cn("h5", styles.subtitle)}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
      </div>

      {/* <Scroll
        className={styles.scroll}
        title="SCROLL TO EXPLORE"
        onScroll={() =>
          scrollToRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }
      /> */}
    </div>
  </div>
);

export default Main;
