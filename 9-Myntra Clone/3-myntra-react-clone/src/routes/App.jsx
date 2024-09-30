import { Outlet } from "react-router-dom";
import Footer from "../../../src/store/components/Footer";
import Header from "../../../src/store/components/Header";
import FetchItems from "../../../src/store/components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../src/store/components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;