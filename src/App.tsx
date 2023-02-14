import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Auth";
import Collaborators from "./pages/Collaborators";
import CreateCollaborator from "./pages/CreateCollaborator";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="collaborators" element={<Collaborators />} />
          <Route path="collaborators/create" element={<CreateCollaborator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
