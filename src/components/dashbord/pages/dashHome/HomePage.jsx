import { useLocation } from "react-router-dom";
const HomePage = () => {
  // Find Dynamic Routes  From the Url  -   //
  let { pathname } = useLocation();
  pathname = pathname.split("/").pop();

  return (
    <div className="flex flex-col items-center">
      <>Task *</>
      <h1>{`Nothing Have This Page  And Your Current Route is : ${pathname}`}</h1>

      <h2>
        In Here i Want to Show geners so that user can see Genere Wise Movie
      </h2>
      <h2>Enable Filtering and read FireBase in Depth || Hooks</h2>
      <p>End of Weekend </p>
    </div>
  );
};

export default HomePage;
