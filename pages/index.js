import Banner from "components/Banner";
import Layout from "components/Layout";
import { Test } from "components/MdxComponents";
import Posts from "components/Posts";
import { getAllPosts, getIndexFile, getSinglePage } from "lib/pages";
import { sortByDate } from "lib/utils/sortFunctions";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useState } from "react";
import rehypeSlug from "rehype-slug";
import config from "../config/config.json";

// mdx component
const components = { Test };

const Home = ({ post, postIndex, banner, mdxSource }) => {
  const sortPostByDate = sortByDate(post);
  const [isCta] = useState(true);
  const showPost = Number(config.parameter.pagination);
  return (
    <Layout title="Mehedi sharif" isCta={isCta}>
      <MDXRemote {...mdxSource} components={components} />
      <Banner banner={banner} />
      <Posts
        className="section"
        post={sortPostByDate.slice(0, showPost)}
        postIndex={postIndex}
      />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const banner = getSinglePage("content/_index.md");
  const { content } = banner;
  const options = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
      ],
    },
  };
  const mdxSource = await serialize(content, options);
  const postIndex = getIndexFile("content/posts");
  const allPost = getAllPosts("content/posts", false);

  return {
    props: {
      banner: banner,
      postIndex: postIndex,
      post: allPost,
      mdxSource: mdxSource,
    },
  };
};
