import SidebarCard from "./SidebarCard";

const Sidebar = ({ apartments }) => {
  return (
    <aside className="w-20vw h-screen  overflow-y-scroll p-4">
      <ul className="flex flex-col gap-2">
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
