import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCampaign } from "../api/campaignsApi";
import Emails from "./Emails";

export default function CampaignDetail() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    getCampaign(id).then((res) => setCampaign(res.data));
  }, []);

  if (!campaign) return <p>Loading...</p>;

  return (
    <>
      <h1>{campaign.name}</h1>
      <p>Status: {campaign.status}</p>
      <p>Scheduled: {campaign.scheduled_time}</p>

      <Emails campaignId={id} />
    </>
  );
}
