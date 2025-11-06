import { useState } from "react";
import MovieCard from "../../components/cards/MovieCard";
import Pagination from "../../components/pagination/Pagination.jsx";
import useFeatchData from "../../hooks/fetchData/FeatchData.js";
import Loading from "../../components/loader/Loading.jsx";
import DataNotFound from "../../components/notFound/DataNotFound.jsx";
import { useSearch } from "../../context-api/dataProvider.jsx";

const RecentlyPlayed = () => {
  const { debouncedKeyword } = useSearch();
  const [loading, setLoding] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const data = useFeatchData(
    "now_playing",
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
    <div className="flex flex-wrap justify-center items-center gap-3 pt-10">
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

export default RecentlyPlayed;
