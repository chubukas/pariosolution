const Background = ({ children }) => {
  return (
    <div className=" h-screen w-full background">
      <div className="flex justify-center"> {children}</div>
    </div>
  );
};

export default Background;
