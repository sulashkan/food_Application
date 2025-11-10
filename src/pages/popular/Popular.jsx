import { useState } from "react";
import MovieCard from "../../components/cards/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import useFeatchData from "../../hooks/fetchData/FeatchData";
import Loading from "../../components/loader/Loading";
import DataNotFound from "../../components/notFound/DataNotFound";
import { useSearch } from "../../context-api/dataProvider";

const Popular = () => {
  const { debouncedKeyword } = useSearch();
  const [loading, setLoding] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const data = useFeatchData(
    "popular",
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
    <div className="flex flex-wrap justify-center items-center gap-6 pt-10 min-h-[82.5vh]">
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

export default Popular;
