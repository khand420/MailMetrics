import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function ReportChart({ data }) {
  return (
    <LineChart width={700} height={350} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis dataKey="delivery_rate" />
      <Tooltip />
      <Line type="monotone" dataKey="delivery_rate" stroke="#6750A4" strokeWidth={3} />
    </LineChart>
  );
}
