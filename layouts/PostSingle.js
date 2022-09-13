import { dateFormat } from "@lib/utils/dateFormat";
import { shortcodes } from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Base from "./Baseof";

const PostSingle = ({ frontmatter, content, mdxContent, nextPrev, slug }) => {
  let { description, title, date, image, categories } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const post = nextPrev.filter((x) => x.slug != slug);

  return (
    <Base title={title} description={description}>
      <section className="section">
        <div className="container mx-auto">
          <div className="rounded-xl bg-gray-100 px-8 pt-14 pb-32 text-center md:px-14 md:pb-40 md:pt-20 lg:px-20">
            <span className="mb-6 text-base font-normal">
              {dateFormat(date)}
            </span>
            <h1 className="text-h1 font-bold">{title}</h1>
          </div>
          <div className="z-10 mx-auto -mt-20 w-4/5 rounded-md border border-gray-100 bg-white p-5 md:p-10 lg:p-16">
            {image && (
              <Image src={image} height="200" width="200" alt={title} />
            )}
            <div className="content mb-16 text-left">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>

            <div className="border-border-default mt-10 hidden border-t pt-10">
              {categories.map((category, i) => (
                <Link key={`category-${i}`} href={`/categories/${category}`}>
                  <a className="mr-4">{category}</a>
                </Link>
              ))}
            </div>
          </div>

          <div
            className={
              post.length < 1
                ? "flex justify-center pt-12 text-center"
                : "flex justify-start pt-12 text-center"
            }
          >
            {post.map((v, key) => (
              <Link key={v.slug} href={`/posts/${v.slug}`}>
                <a
                  className={
                    post.length == 1
                      ? "w-full text-center"
                      : key == 0
                      ? "w-1/2 text-right"
                      : key == 1
                      ? "w-1/2 text-left"
                      : undefined
                  }
                >
                  <div className="mx-4">
                    {v.button == "Previous Post" ? (
                      <h4
                        className={
                          post.length == 1
                            ? "flex items-center justify-center text-base font-bold"
                            : "flex items-center justify-end text-base font-bold"
                        }
                      >
                        <span className="mr-4">{v.arrow}</span> {v.button}
                      </h4>
                    ) : (
                      <h4
                        className={
                          post.length == 1
                            ? "flex items-center justify-center text-base font-bold"
                            : "flex items-center justify-start text-base font-bold"
                        }
                      >
                        {v.button} <span className="ml-4">{v.arrow}</span>
                      </h4>
                    )}

                    <small className="text-lg font-normal">{v.title}</small>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
