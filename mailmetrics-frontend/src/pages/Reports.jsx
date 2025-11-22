import { useEffect, useState } from "react";
import { getReports } from "../api/reportsApi";
import ReportChart from "../components/ReportChart";

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports().then((res) => setReports(res.data));
  }, []);

  return (
    <>
            <div style={{ color: "#333", padding: "10px" }}>
      <h3 style={{ marginBottom: "10px" }}>Reports</h3>

    </div>
      <ReportChart data={reports} />
    </>
  );
}
