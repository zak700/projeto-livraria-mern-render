import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";
export default function layout() {
  return (
    <div className="layout">
      <Sidebar />
    
      <Header />
      
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
