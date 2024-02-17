import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import Image from "@/components/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
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
        <Slider
          {...settings}
          slidesToShow={isMobile ? 1 : 4}
          className={styles.list}
        >
          {reviews.map((review, index) => (
            <AnimationOnScroll
              className={styles.item}
              animateIn="fadeInDown"
              delay={isMobile ? 0 : review.delay}
              key={index}
              animateOnce
            >
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
        </Slider>
      </div>
    </div>
  );
};

export default Backers;
