import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
