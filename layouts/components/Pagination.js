import Link from "next/link";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ currentPage, numOfPage }) => {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = numOfPage > currentPage;

  return (
    <div className="mx-auto mb-10 flex items-center justify-between rounded-full bg-gray-100 dark:bg-theme-dark md:mb-20 md:w-1/2 lg:w-1/4">
      {hasPrevPage ? (
        <Link
          href={`/posts/page/${currentPage - 1}`}
          passHref
          className="border-border-default block border-r py-4 px-5 text-center dark:border-darkmode-border"
        >
          <MdArrowBackIos />
        </Link>
      ) : (
        <span className="border-border-default block cursor-not-allowed border-r py-4 px-5 text-center opacity-20 dark:border-darkmode-border">
          <MdArrowBackIos />
        </span>
      )}
      <span>
        <strong> {currentPage < 9 ? "0" + currentPage : currentPage}</strong>/
        {numOfPage < 9 ? "0" + numOfPage : numOfPage}
      </span>
      {hasNextPage ? (
        <Link
          href={`/posts/page/${currentPage + 1}`}
          passHref
          className="border-border-default block border-l py-4 px-5 text-center dark:border-darkmode-border"
        >
          <MdArrowForwardIos />
        </Link>
      ) : (
        <span className="border-border-default block cursor-not-allowed border-l py-4 px-5 text-center opacity-20 dark:border-darkmode-border">
          <MdArrowForwardIos />
        </span>
      )}
    </div>
  );
};

export default Pagination;
