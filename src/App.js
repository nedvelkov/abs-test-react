import React from "react";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import FindFlights from "./components/FindFlights";

function App() {
  const [page, setPage] = React.useState({
    detail: true,
    findFlights: false,
    bookSeat: false,
  });

  function selectPage(name) {
    setPage((prev) => {
      return { ...prev, [name]: !prev[name] };
    });
  }

  return (
    <div>
      <Navbar selectPage={selectPage} />
      {page.detail && <Detail />}
      {page.findFlights && <FindFlights />}
    </div>
  );
}

export default App;
