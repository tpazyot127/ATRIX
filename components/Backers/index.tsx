import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import Image from "@/components/Image";

type BackersType = {
  author: string;
  position: string;
  avatar: string;
  content: string;
  delay?: number;
};

type ReviewsProps = {
  reviews: BackersType[];
};

const Backers = ({ reviews }: ReviewsProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("h2", styles.title)}>Backers</div>
        </div>
        <div className={styles.list}>
          {reviews.map((review, index) => (
            <AnimationOnScroll
              className={styles.item}
              animateIn="fadeInDown"
              delay={isMobile ? 0 : review.delay}
              key={index}
              animateOnce
            >
              <div className={styles.content}>{review.content}</div>
              <div className={styles.line}>
                <div className={styles.avatar}>
                  <Image
                    src={review.avatar}
                    layout="fill"
                    objectFit="contain"
                    alt="Avatar"
                  />
                </div>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backers;
