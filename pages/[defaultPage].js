import Layout from "components/Layout";
import About from "Layouts/About";
import Contact from "Layouts/Contact";
import Regular from "Layouts/Regular";
import { getDefaultPage } from "lib/pages";
import React from "react";

// for all regular pages
const RegularPages = ({ slug, regularPages, contact, about }) => {
  if (regularPages === undefined) {
    return null;
  }
  return (
    <Layout title={slug}>
      {slug == "contact" ? (
        <Contact contact={contact} />
      ) : slug == "about" ? (
        <About about={about} />
      ) : (
        <Regular regularPages={regularPages} />
      )}
    </Layout>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = () => {
  const regularPages = getDefaultPage("content");
  const paths = regularPages.map((page) => ({
    params: {
      defaultPage: page.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

// for regular page data
export const getStaticProps = ({ params }) => {
  const { defaultPage } = params;
  const allPages = getDefaultPage("content");
  const regularPages = allPages.filter(
    (page) => !page.frontmatter.layout //&& page.slug === defaultPage
  );
  const about = allPages.filter((page) => page.frontmatter.layout === "about");
  const contact = allPages.filter(
    (page) => page.frontmatter.layout === "contact"
  );

  // for custom 404 page rendering
  const allPagesCheck = allPages.filter((page) => page.slug === defaultPage);
  if (allPagesCheck.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      regularPages: regularPages,
      slug: defaultPage,
      allPost: allPages,
      contact: contact,
      about: about,
    },
  };
};
