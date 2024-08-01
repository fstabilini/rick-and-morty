import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Character from "./Components/Character/Character";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setData(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <div className={styles.appContainer}>
      <Navigation />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
