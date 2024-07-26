import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
// import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  // const [data, setData] = useState({
  //   name: "",
  //   status: "",
  //   species: "",
  //   gender: "",`
  // });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setData(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Home data={data} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} />
      </Routes> */}
    </div>
  );
}

export default App;
