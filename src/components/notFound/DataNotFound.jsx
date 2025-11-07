const DataNotFound = ({ type = "Data" }) => {
  return (
    <div className="min-h-[83vh] flex items-center justify-center ">
      <p className=" border-l-4 border-white py-3 px-6 text-2xl">
        403 - {type} Not Found
      </p>
    </div>
  );
};

export default DataNotFound;
