import SidebarCard from "./SidebarCard";

const Sidebar = ({ apartments }) => {
  return (
    <aside className="w-20vw h-screen  overflow-y-scroll">
      <ul className="">
        {apartments.map((apartment, i) => (
          <li key={i} className="w-full border border-black p-2 rounded-2xl">
            <SidebarCard apartment={apartment} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
