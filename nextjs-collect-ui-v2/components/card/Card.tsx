const Card = () => {
  return (
    <div className="p-4 bg-white rounded-2xl max-w-[350px] shadow1">
      <img src="/card.png" alt="" className="rounded-xl" />
      <button className="w-full py-3 mt-4 font-semibold text-white rounded-xl bg-gradient-blue">
        View
      </button>
    </div>
  );
};

export default Card;
