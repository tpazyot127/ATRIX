import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import { APP_ROUTE } from "@/utils/commom";

// import { reviews } from "@/mocks/reviews";

const TechnologyPage = () => {
    const scrollToRef = useRef(null);
    return (
        <Layout layoutWhite route={APP_ROUTE}>
            <Main scrollToRef={scrollToRef} />                  
        </Layout>
    );
};

export default TechnologyPage;
