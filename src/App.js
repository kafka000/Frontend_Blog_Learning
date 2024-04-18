import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import "./App.css";
// 导入页面组件
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Article from "./pages/Article";
import Publish from "./pages/Publish";
import Home from "./pages/Home";
import Bilibili from "./pages/Bilibili";
import Basic from "./pages/Basic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthRoute><Layout/></AuthRoute>}>
            {/* 二级页面 */}
            <Route path="home" element={<Home/>}></Route>
            <Route path="article" element={<Article/>}></Route> 
            <Route path="publish" element={<Publish/>}></Route>
            <Route path="bilibili" element={<Bilibili/>}></Route>
            <Route path="basic" element={<Basic/>}></Route>                         
          </Route>
          <Route path="/login" element={<Login/>} />
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
