import { DataGrid } from "@mui/x-data-grid";

export default function CampaignTable({ campaigns }) {
  return (
    <DataGrid
      rows={campaigns}
      columns={[
        { field: "name", headerName: "Name", width: 200 },
        { field: "scheduled_time", headerName: "Scheduled", width: 200 },
        { field: "status", headerName: "Status", width: 150 },
      ]}
      autoHeight
      pageSize={10}
    />
  );
}
