const Sidebar = ({ apartments }) => {
  return (
    <aside className="w-full h-screen  overflow-y-scroll">
      <ul className="">
        {apartments.map((apartment, i) => (
          <li key={i} className="w-full border border-black p-2">
            <div>{`${apartment.rooms}-Zimmer Wohnung`}</div>
            <div>{`Whg. Nr. ${apartment.number}`}</div>
            <div>{apartment.status}</div>
            <div className="flex">
              <div>
                <p>Fläche</p>
              </div>
              <div>{`${apartment.space} m²`}</div>
            </div>
            <div>
              <div>
                <p>Geschoss</p>
              </div>
              <div>{`${apartment.floor}`}</div>
            </div>
            <div>
              <div>
                <p>Preis</p>
              </div>
              <div>{`CHF ${apartment.price}`}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
