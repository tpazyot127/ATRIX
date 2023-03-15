import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>Contact us</div>
                <div className={cn("h1", styles.title)}>Let’s chat</div>
                <div className={styles.info}>
                    Onix delivers tamper-proof inputs, outputs, and computations
                    to support advanced smart contracts on any blockchain
                </div>
                <Scroll
                    className={styles.scroll}
                    mouseClassName={styles.mouse}
                    title="WRITE SOMETHING"
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    row
                />
            </div>
        </div>
        <div className={styles.images}>
            <div className={styles.image}>
                <Image src="/images/lines-1.svg" layout="fill" alt="Lines" />
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -10]}
            >
                <Image
                    src="/images/figures/figure-3.png"
                    layout="fill"
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
);

export default Main;
