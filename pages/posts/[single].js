import Layout from "components/Layout";
import BlogSinglePost from "components/PostSingle";
import { getAllPosts } from "lib/pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SinglePost = ({ post, allPost }) => {
  const { frontmatter, slug, content } = post[0];

  var index = allPost.findIndex((img) => img.slug == slug);
  const prev = index - 1 >= 0 ? allPost[index - 1].slug : slug;
  const next = index + 1 < allPost.length ? allPost[index + 1].slug : slug;
  const prevTitle =
    index - 1 >= 0 ? allPost[index - 1].frontmatter.title : frontmatter.title;
  const nextTitle =
    index + 1 < allPost.length
      ? allPost[index + 1].frontmatter.title
      : frontmatter.title;
  const nextPrev = [
    {
      button: "previous post",
      slug: prev,
      title: prevTitle,
      arrow: <BsArrowLeft />,
    },
    {
      button: "next post",
      slug: next,
      title: nextTitle,
      arrow: <BsArrowRight />,
    },
  ];

  return (
    <Layout title={slug}>
      <BlogSinglePost
        frontmatter={frontmatter}
        content={content}
        nextPrev={nextPrev}
        slug={slug}
      />
    </Layout>
  );
};

export const getStaticPaths = () => {
  const allBlogs = getAllPosts("content/posts", false);
  const paths = allBlogs.map((post) => ({
    params: {
      single: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const { single } = params;
  const allBlogs = getAllPosts("content/posts", false);
  const singlePost = allBlogs.filter((p) => p.slug == single);

  return {
    props: {
      post: singlePost,
      slug: single,
      allPost: allBlogs,
    },
  };
};
export default SinglePost;
