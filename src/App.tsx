import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard.page";
import Dishes from "./pages/Dishes.page";
import Home from "./components/home/Home";

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
