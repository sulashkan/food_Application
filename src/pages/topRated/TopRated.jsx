import { useState } from "react";
import MovieCard from "../../components/cards/MovieCard";
import useFeatchData from "../../hooks/fetchData/FeatchData.js";
import Pagination from "../../components/pagination/Pagination.jsx";
import Loading from "../../components/loader/Loading.jsx";
import DataNotFound from "../../components/notFound/DataNotFound.jsx";
import { useSearch } from "../../context-api/dataProvider.jsx";

const TopRated = () => {
  const { debouncedKeyword } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoding] = useState(true);

  const data = useFeatchData(
    "top_rated",
    currentPage,
    setTotalPages,
    setLoding,
    debouncedKeyword
  );

  return loading ? (
    <Loading />
  ) : !data || data.length < 1 ? (
    <DataNotFound />
  ) : (
    <div className="flex flex-wrap justify-center items-center gap-3 pt-10 min-h-[82.5vh]">
      {data?.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TopRated;
