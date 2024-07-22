import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home.page";
import Dashboard from "./pages/Dashboard.page";
import Dishes from "./pages/Dishes.page";

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
