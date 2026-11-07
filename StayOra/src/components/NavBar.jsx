import React from "react";
import { Link } from "react-router-dom";
import { Hotel, Plus, LayoutDashboard } from "lucide-react";

function NavBar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="logo">
        <Hotel size={30} />
        <span>STAYORA</span>
      </Link>

      <div className="sidebar-links">
        <Link to="/" className="active">
          <LayoutDashboard size={20} />
          Hotels
        </Link>

        <Link to="/add-hotel">
          <Plus size={20} />
          Add Hotel
        </Link>
      </div>

      <div className="sidebar-footer">Hotel Booking Platform</div>
    </aside>
  );
}

export default NavBar;
