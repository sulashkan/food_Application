import ResponsivePagination from "react-responsive-pagination";
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  console.log();
  totalPages =
    totalPages > 1000
      ? Math.ceil(totalPages / 1000)
      : Math.ceil(totalPages / 10);

  return (
    <>
      <ResponsivePagination
        className="w-full flex gap-2 text-white button h-10 items-center justify-center pagination-layout"
        current={currentPage}
        total={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Pagination;
