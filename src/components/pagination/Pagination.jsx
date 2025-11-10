import ResponsivePagination from "react-responsive-pagination";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  totalPages = totalPages > 500 ? 500 : totalPages;

  return (
    <div className="flex justify-center items-center w-full my-6">
      <div className="w-[40%] max-w-md sm:w-[70%] xs:w-[90%]">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          className="flex justify-center gap-2 text-white h-10"
        />
      </div>
    </div>
  );
};

export default Pagination;
