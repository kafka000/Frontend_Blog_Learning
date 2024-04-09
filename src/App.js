import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import './App.css'
// 导入页面组件
import Login from "./pages/Login";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
