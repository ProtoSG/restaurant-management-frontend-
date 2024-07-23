import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard/Dashboard.page";
import Dishes from "./pages/dishes/Dishes.page";
import Home from "./pages/home/Home.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dishes" element={<Dishes />} />
      </Route>
    </Routes>
  );
}

export default App;
