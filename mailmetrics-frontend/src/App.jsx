import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import CampaignDetail from "./pages/CampaignDetail";
import Reports from "./pages/Reports";
import Login from "./pages/Login";

import "./layout.css";  // ADD THIS

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">

        <Sidebar />

        <div className="content">
          <Topbar />

          <div className="page-container">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/:id" element={<CampaignDetail />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
