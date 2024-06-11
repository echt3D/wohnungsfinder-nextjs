const Filter = () => {
  return (
    <section className="w-full absolute z-100 bottom-0 h-full bg-black bg-opacity-40 flex items-end">
      <div className="my-6 mx-4 w-full h-1/2 bg-white rounded-2xl p-4 flex flex-col place-items-center">
        <p>Sortieren & Filtern</p>
        <section>
          <div>
            <p>Sortierung</p>
          </div>
          <div>
            <div className="flex gap-2">
              <input type="radio" value="space" />
              <label>Wohnfläche</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" value="floor" />
              <label>Geschoss</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" value="rooms" />
              <label>Zimmer</label>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Filter;
