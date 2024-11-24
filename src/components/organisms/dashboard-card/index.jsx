import Card from "@/components/molecules/card";

export default function DashboardCard() {
  return (
    <div className="lg:col-span-12 grid lg:grid-cols-3 gap-4 mt-8">
      <Card title="Total Barang" count={100} />
      <Card title="Barang Masuk Hari Ini" count={100} />
      <Card title="Barang Keluar Hari Ini" count={100} />
    </div>
  );
}
