import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-green-300 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col">
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/add-service">Add Service</NavLink>
        <NavLink to="/admin/service-list">Service List</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
