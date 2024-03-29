import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Posts from "@/components/Posts";
import Backers from "@/components/Backers";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import { reviews } from "@/mocks/reviews";

const HomePage = () => {
  const scrollToRef = useRef(null);

  return (
    <Layout>
      <Main scrollToRef={scrollToRef} />
      {/* <Development scrollToRef={scrollToRef} /> */}
      {/* <AboutUs /> */}
      {/* <Statistics /> */}
      <Solutions />
      {/* <Posts
          className="section"
          title="Your gateway to everything ATRIX."
          info="Stay current on the latest ATRIX project developments, news, and content, updated daily."
          posts={posts}
        /> */}
      <Backers reviews={reviews} />
      <JoinCommunity title="Want to get involved?" />
    </Layout>
  );
};

export default HomePage;
