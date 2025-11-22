import { useEffect, useState } from "react";
import { getCampaigns } from "../api/campaignsApi";
import CampaignTable from "../components/CampaignTable";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns().then((res) => setCampaigns(res.data));
  }, []);

  return (
    <>
        <div style={{ color: "#333", padding: "10px" }}>
      <h3 style={{ marginBottom: "10px" }}>Campaigns</h3>

    </div>
      <CampaignTable campaigns={campaigns} />
    </>
  );
}
