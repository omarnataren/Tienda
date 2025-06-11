const BarraNav = (props) => {


  return (
    <header className="w-full bg-[#DAD7CD] shadow-md py-4 px-6 flex items-center justify-between text-gray-800">
      
      <button className="text-lg font-semibold hover:underline" onClick={props.menu} >Menu</button>

            <button className="text-lg font-semibold">HxM</button>

      
      <button className="relative">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
          {props.Numeroproductos}
        </span>
      </button>
    </header>
  );
};

export default BarraNav;
