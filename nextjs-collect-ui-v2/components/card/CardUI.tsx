interface CardUIProps {
  title: string;
  children: React.ReactNode;
}

const CardUI = ({ title, children }: CardUIProps) => {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
      <div className="mt-8">Footer</div>
    </div>
  );
};

export default CardUI;
