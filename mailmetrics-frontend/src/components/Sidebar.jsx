import { Link } from "react-router-dom";
// import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MailMetrics</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </div>
  );
}
