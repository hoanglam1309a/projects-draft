const Card3 = () => {
  return (
    <div className="p-4 bg-white rounded-2xl max-w-[350px]">
      <div className="flex gap-x-[10px]">
        <div className="flex-shirk-0">
          <div className="w-[50px] h-[50px] rounded-full bg-[#DDE1E8]" />
        </div>
        <div className="flex flex-col justify-center gap-y-[6px]">
          <div className="bg-[#DDE1E8] w-28 h-4 rounded-2xl"></div>
          <div className="bg-[#DDE1E8] w-28 h-4 rounded-2xl"></div>
        </div>
      </div>
      <div className="my-4">
        <div className="rounded-xl flex items-center justify-center aspect-video bg-[#DDE1E8]">
          <img src="/image-skeleton.png" alt="" className="w-[75px] h-[75px]" />
        </div>
      </div>
      <div className="bg-[#DDE1E8] w-full h-[50px] rounded-2xl flex items-center justify-center">
        <div className="bg-[#CBCFD7] w-28 h-5 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Card3;
