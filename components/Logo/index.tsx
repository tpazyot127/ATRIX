import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)} onClick={onClick}>
            <Image
                src="/images/logo.svg"
                width={90}
                height={24}
                alt="Onix"
                priority
            />
        </a>
    </Link>
);

export default Logo;
