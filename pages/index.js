import Banner from "@components/Banner";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import Posts from "@partials/Posts";
import { useState } from "react";
const { blog_folder } = config.settings;

const Home = ({ posts, banner, postIndex }) => {
  const sortPostByDate = sortByDate(posts);
  const showPost = 4;
  const { title } = config.site;
  const [isCta] = useState(true);

  return (
    <Base title={title} isCta={isCta}>
      <Banner banner={banner} />
      <Posts
        className="section"
        posts={sortPostByDate.slice(0, showPost)}
        postIndex={postIndex}
      />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;
  const postIndex = await getListPage(`content/${blog_folder}`);
  const posts = getSinglePages(`content/${blog_folder}`);

  return {
    props: {
      banner: banner,
      posts: posts,
      postIndex: postIndex,
    },
  };
};
