const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mr-2">
        <span className="font-bold text-xl text-white">S</span>
      </div>
      <span className="font-bold text-xl">ai<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">builder</span></span>
    </div>
  );
};

export default Logo;
