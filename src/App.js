import logo from "./logo.svg";
import "./App.css";
import Cot from "./conponents/cot";
import Ustate from "./conponents/ustate";
import New from "./conponents/new";
import { Blog } from "./conponents/blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailBlog from "./conponents/detailBlog";
import AddNewBlog from "./customize/addnewbog";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cot />
        <header className="App-header">
          <Routes>
            <Route path="/home" element={<Ustate />} />

            <Route path="/new" element={<New />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<DetailBlog />} />
            <Route path="/add-new-blog" element={<AddNewBlog />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
