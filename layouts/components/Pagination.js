import Link from "next/link";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ currentPage, numOfPage }) => {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = numOfPage > currentPage;

  return (
    <div className="mx-auto mb-20 flex w-1/4 items-center justify-between rounded-full bg-gray-100">
      {hasPrevPage ? (
        <Link href={`/posts/page/${currentPage - 1}`} passHref>
          <a className="border-border-default block border-r py-4 px-5 text-center">
            <MdArrowBackIos />
          </a>
        </Link>
      ) : (
        <span className="border-border-default block cursor-not-allowed border-r py-4 px-5 text-center">
          <MdArrowBackIos />
        </span>
      )}
      <span>
        <strong> {currentPage < 9 ? "0" + currentPage : currentPage}</strong>/
        {numOfPage < 9 ? "0" + numOfPage : numOfPage}
      </span>
      {hasNextPage ? (
        <Link href={`/posts/page/${currentPage + 1}`} passHref>
          <a className="border-border-default block border-l py-4 px-5 text-center">
            <MdArrowForwardIos />
          </a>
        </Link>
      ) : (
        <span className="border-border-default block cursor-not-allowed border-l py-4 px-5 text-center">
          <MdArrowForwardIos />
        </span>
      )}
    </div>
  );
};

export default Pagination;
