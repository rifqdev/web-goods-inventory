"use client";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DashboardCard from "@/components/organisms/dashboard-card";

const mockData = [
  {
    id: "f1ce410f-22e7-4d94-bbe3-8da08d508b35",
    name: "tv",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "366b56aaeb17",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:50:25",
    updatedAt: "2024-11-24 06:50:25",
  },
  {
    id: "fdb3b1c4-99da-42e9-ab86-f65de73599e5",
    name: "kipas angin",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "cf3c2b030be5",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "a1b2c3d4-e5f6-4g7h-8i9j-k0l1m2n3o4p5",
    name: "kulkas",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "abc123def456",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "b2c3d4e5-f6g7-4h8i-9j0k-l1m2n3o4p5q6",
    name: "mesin cuci",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "def456ghi789",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "c3d4e5f6-g7h8-4i9j-0k1l-m2n3o4p5q6r7",
    name: "rice cooker",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "ghi789jkl012",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "d4e5f6g7-h8i9-4j0k-1l2m-n3o4p5q6r7s8",
    name: "blender",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "jkl012mno345",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "e5f6g7h8-i9j0-4k1l-2m3n-o4p5q6r7s8t9",
    name: "microwave",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "mno345pqr678",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "f6g7h8i9-j0k1-4l2m-3n4o-p5q6r7s8t9u0",
    name: "dispenser",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "pqr678stu901",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "g7h8i9j0-k1l2-4m3n-4o5p-q6r7s8t9u0v1",
    name: "setrika",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "stu901vwx234",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "h8i9j0k1-l2m3-4n4o-5p6q-r7s8t9u0v1w2",
    name: "kompor",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "vwx234yza567",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "i9j0k1l2-m3n4-4o5p-6q7r-s8t9u0v1w2x3",
    name: "ac",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "yza567bcd890",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
  {
    id: "j0k1l2m3-n4o5-4p6q-7r8s-t9u0v1w2x3y4",
    name: "speaker",
    category_id: "41d3baab-e556-4ec6-9bcb-60e7a53a8f07",
    stock: 10,
    price: 200,
    goods_code: "bcd890efg123",
    description: "ladfdshfdshjfdsjf",
    user_id: "b53ae369-12dc-494c-be7c-be90b39265ed",
    createdAt: "2024-11-24 06:42:46",
    updatedAt: "2024-11-24 06:46:02",
  },
];
export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDashboard, setShowDashboard] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const handleExportData = () => {
    // Membuat data CSV
    const headers = ["No", "Kode Barang", "Nama Barang", "Kategori", "Stok", "Harga", "Total Nilai"];
    const csvData = mockData.map((item, index) => [
      index + 1,
      item.goods_code,
      item.name,
      item.category_id,
      item.stock,
      item.price,
      item.price * item.stock,
    ]);

    // Menggabungkan headers dan data
    const csvContent = [headers.join(","), ...csvData.map((row) => row.join(","))].join("\n");

    // Membuat blob dan mengunduh file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `data_barang_${new Date().toLocaleDateString()}.csv`);
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          <Button onClick={handleShowDashboard} className="bg-black text-white px-4 py-2 rounded-md ">
            {showDashboard ? "Sembunyikan Ringkasan" : "Tampilkan Ringkasan"}
          </Button>
          <Button onClick={handleExportData} className="bg-green-500 text-white px-4 py-2 rounded-md ">
            Export Data
          </Button>
        </div>
      </div>

      {showDashboard && <DashboardCard />}

      {/* filter */}
      <div className="mt-8 flex gap-4 justify-end">
        <div>
          <Button onClick={handleOpenModal} className="bg-green-500 text-white px-4 py-2 rounded-md relative top-7">
            Tambah Barang
          </Button>
        </div>
        <div className="flex gap-4">
          <div>
            <p className="text-sm mb-2">Tanggal Awal</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <p className="text-sm mb-2">Tanggal Akhir</p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="">
          <Input type="text" placeholder="Cari Barang" className="relative top-7 w-full p-2 rounded-md border-2 border-gray-300 outline-none" />
        </div>
      </div>
      {/* Table */}
      <div className="mt-8">
        <table className="table-auto w-full border border-slate-400">
          <thead className="bg-slate-200">
            <tr>
              <th className="border border-slate-400 p-2">No</th>
              <th className="border border-slate-400 p-2">Kode Barang</th>
              <th className="border border-slate-400 p-2">Nama Barang</th>
              <th className="border border-slate-400 p-2">Kategori</th>
              <th className="border border-slate-400 p-2">Stok</th>
              <th className="border border-slate-400 p-2">Harga</th>
              <th className="border border-slate-400 p-2">Total Nilai</th>
              <th className="border border-slate-400 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, index) => (
              <tr key={item.id} className={`${index % 2 === 0 ? "bg-slate-100" : "bg-white"}`}>
                <td className="border border-slate-400 p-2">{index + 1}</td>
                <td className="border border-slate-400 p-2">{item.goods_code}</td>
                <td className="border border-slate-400 p-2">{item.name}</td>
                <td className="border border-slate-400 p-2">{item.category_id}</td>
                <td className="border border-slate-400 p-2">{item.stock}</td>
                <td className="border border-slate-400 p-2">{item.price}</td>
                <td className="border border-slate-400 p-2">{item.price * item.stock}</td>
                <td className="border border-slate-400 p-2">
                  <div className="flex gap-2">
                    <Button className="bg-green-500 text-white px-2 py-1 text-sm rounded-md">Edit</Button>
                    <Button className="bg-red-500 text-white px-2 py-1 text-sm rounded-md">Hapus</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal tambah barang */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen ? "" : "hidden"}`}>
        <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
        <div className="bg-white p-8 rounded-lg z-10 w-[500px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Tambah Barang</h2>
            <Button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Barang</label>
              <Input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Pilih Kategori</option>
                <option value="elektronik">Elektronik</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stok</label>
              <Input type="number" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Harga</label>
              <Input type="number" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
              <textarea className="w-full p-2 border rounded-md" rows="3"></textarea>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button onClick={handleCloseModal} className="px-4 py-2 border rounded-md">
                Batal
              </Button>
              <Button className="px-4 py-2 bg-green-500 text-white rounded-md">Simpan</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
