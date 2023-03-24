import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import Firstitem from "./components/items/Firstitem";
import Seconditem from "./components/items/Seconditem";
import Thirditem from "./components/items/Thirditem";
import Fourthitem from "./components/items/Fourthitem";
import Fifthitem from "./components/items/Fifthitem";
import Sixthitem from "./components/items/Sixthitem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Audiophile" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />}></Route>
          <Route path="speakers" element={<Speakers />}></Route>
          <Route path="earphones" element={<Earphones />}></Route>
          <Route path="firstitem" element={<Firstitem />}></Route>
          <Route path="seconditem" element={<Seconditem />}></Route>
          <Route path="thirditem" element={<Thirditem />}></Route>
          <Route path="fourthitem" element={<Fourthitem />}></Route>
          <Route path="fifthitem" element={<Fifthitem />}></Route>
          <Route path="sixthitem" element={<Sixthitem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
