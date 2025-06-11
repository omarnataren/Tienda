const Articulo = ({ imagen, nombre, descripcion, precio }) => {
  return (
    <div className="w-[300px] h-[600px] p- m-4">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-[200px] object-cover border-none shadow-none rounded-none"
      />
      <div className="mt-3 text-[#000102]">
        <h3 className="text-lg font-normal leading-tight">{nombre}</h3>
        <p className="text-sm text-gray-700 mt-1 leading-snug">{descripcion}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-medium">${precio}</span>
          <button className="bg-[#000102] text-white text-sm px-3 py-1 hover:bg-opacity-80 transition">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articulo;



