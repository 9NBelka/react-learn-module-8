// import Layout from "./Layout/Layout";
import { Suspense } from "react";
import { Route, Router } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import TaskPage from "../pages/TaskPage/TaskPage";


function App() {


  return (
    <>
      {/* <Layout> */}
        <Suspense fallback={null}>
          <Router>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Router>
        </Suspense>
      {/* </Layout> */}
    </>
  )
}

export default App
