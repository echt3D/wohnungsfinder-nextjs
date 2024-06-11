import Image from "next/image";

const FilterButton = ({ setOpenFilter }) => {
  return (
    <section
      onClick={() => setOpenFilter(true)}
      className="border border-black rounded-2xl w-full flex p-1 gap-2 items-center cursor-pointer"
    >
      <Image src="/images/filter.svg" width={24} height={24} alt="filter" />
      <div>
        <p className="text-sm">Sortieren & Filtern</p>
      </div>
    </section>
  );
};

export default FilterButton;
