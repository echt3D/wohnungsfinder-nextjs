import Image from "next/image";

const SidebarCard = ({ apartment }) => {
  return (
    <div >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 bg-${apartment.status} rounded-full`}></div>
          <div className="text-sm">{`Whg. Nr. ${apartment.number}`}</div>
        </div>
        <Image src="/images/like.svg" width={32} height={32} alt="like" />
      </div>
      <div>
        <div className="text-lg">{`${apartment.rooms}-Zimmer Wohnung`}</div>
      </div>
    </div>
  );
};

export default SidebarCard;
