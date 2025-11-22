import { useEffect, useState } from "react";
import { getEmails } from "../api/emailsApi";
import EmailTable from "../components/EmailTable";

export default function Emails({ campaignId }) {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    getEmails(campaignId).then((res) => setEmails(res.data));
  }, []);

  return (
    <div>
             <div style={{ color: "#333", padding: "10px" }}>
      <h3 style={{ marginBottom: "10px" }}>Email</h3>

    </div>
      <EmailTable emails={emails} />
    </div>
  );
}
