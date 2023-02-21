import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Auth";
import Collaborator from "./pages/Collaborators/Collaborator";
import Collaborators from "./pages/Collaborators/Collaborators";
import CreateCollaborator from "./pages/Collaborators/CreateCollaborator";
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
          <Route path="collaborators/:id" element={<Collaborator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
