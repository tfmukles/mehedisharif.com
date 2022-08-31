import Layout from "components/Layout";
import Pagination from "components/Pagination";
import Posts from "components/Posts";
import config from "config/config.json";
import { getAllPosts, getIndexFile } from "lib/pages";
import { useState } from "react";

const BlogPagination = ({ blogIndex, allBlogs, page, pagination }) => {
  const [index] = useState(true);
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const numOfPage = Math.ceil(allBlogs.length / pagination);
  const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Layout title="blog">
      <Posts
        post={currentPosts}
        postIndex={blogIndex}
        index={index}
        className="section"
      />
      <Pagination numOfPage={numOfPage} page={page} />
    </Layout>
  );
};

export default BlogPagination;

export const getStaticPaths = () => {
  const allBlogs = getAllPosts("content/posts", false);
  const { pagination } = config.parameter;
  const numOfPage = Math.ceil(allBlogs.length / pagination);
  let paths = [];

  for (let i = 0; i < numOfPage; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const page = parseInt((params && params.slug) || 1);
  const { pagination } = config.parameter;
  const allBlogs = getAllPosts("content/posts", false);
  const blogIndex = getIndexFile("content/posts");

  return {
    props: {
      pagination: pagination,
      allBlogs: allBlogs,
      page: page,
      blogIndex: blogIndex,
    },
  };
};
