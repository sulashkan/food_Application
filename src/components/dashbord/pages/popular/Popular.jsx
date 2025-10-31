import { useState } from "react";
import { useLocation } from "react-router-dom";

import MovieCard from "../../components/cards/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import useFeatchData from "../../../../hooks/fetchData/FeatchData";

const Popular = () => {
  // Getting Dynamic Path From Routes -
  let { pathname } = useLocation();
  pathname = pathname.split("/").pop();

  const [currentPage, setCurrentPage] = useState(1); // update currentPage -
  const [totalPages, setTotalPages] = useState(1); //  count total items -

  const data = useFeatchData(pathname, currentPage, setTotalPages);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 ">
      <Pagination
        className
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      {data?.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default Popular;
