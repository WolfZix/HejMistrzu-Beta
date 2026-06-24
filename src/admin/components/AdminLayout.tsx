import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}