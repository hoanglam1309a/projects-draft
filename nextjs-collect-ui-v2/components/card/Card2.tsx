const Card2 = () => {
  return (
    <div className="p-4 bg-white rounded-2xl max-w-[350px]">
      <div className="flex gap-x-[10px]">
        <div className="flex-shirk-0">
          <img src="/user.png" alt="" className="w-[50px] h-[50px] rounded-full" />
        </div>
        <div>
          <h2 className="font-semibold">Brent Schoepf</h2>
          <span className="text-[#A6ADB1]">Designer</span>
        </div>
      </div>
      <div className="my-4">
        <img src="/setup1.png" alt="" className="rounded-xl" />
      </div>
      <button className="w-full py-3 font-semibold text-white rounded-xl bg-gradient-blue">
        View
      </button>
    </div>
  );
};

export default Card2;
