import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePages, getSinglePagesSlug } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const { blog_folder } = config.settings;

// post single layout
const Article = ({ post, allPost, mdxContent, slug }) => {
  const { frontmatter, content } = post[0];

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
      button: "Previous Post",
      slug: prev,
      title: prevTitle,
      arrow: <BsArrowLeft />,
    },
    {
      button: "Next Post",
      slug: next,
      title: nextTitle,
      arrow: <BsArrowRight />,
    },
  ];

  return (
    <PostSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
      slug={slug}
      nextPrev={nextPrev}
    />
  );
};

// get post single slug
export const getStaticPaths = () => {
  const allSlug = getSinglePagesSlug(`content/${blog_folder}`);
  const paths = allSlug.map((slug) => ({
    params: {
      single: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// get post single content
export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const posts = getSinglePages(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug == single);
  const mdxContent = await parseMDX(post[0].content);

  return {
    props: {
      post: post,
      allPost: posts,
      mdxContent: mdxContent,
      slug: single,
    },
  };
};

export default Article;
