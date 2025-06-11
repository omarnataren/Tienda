import productos from "../datos/ProductosHombre";
import BarraNav from "./BarraNav";
import { useState } from "react";

const OpcionesHombre = ({opcion,menu}) => {
  const [Numeroproductos, setNumeroProductos] = useState(0);

  const añadirProducto = () => {
    setNumeroProductos(Numeroproductos + 1);
  };

  
  const [tallasSeleccionadas, setTallasSeleccionadas] = useState({});

  const seleccionarTalla = (idProducto, talla) => {
    setTallasSeleccionadas((prev) => ({
      ...prev,
      [idProducto]: talla,
    }));
  };

  return (
    <>
      <BarraNav Numeroproductos={Numeroproductos} opcion = {opcion} menu={menu}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-[#FDFFEA]">
        {productos.map((producto) => (
          <div key={producto.id} className="text-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-64 h-64 object-cover mx-auto rounded-lg shadow"
            />
            <h2 className="mt-4 text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-sm text-gray-600">{producto.descripcion}</p>
            <p className="mt-2 font-bold text-lg">${producto.precio}</p>

            <div className="mt-4 flex justify-center gap-3">
              {["S", "M", "L"].map((talla) => (
                <button
                  key={talla}
                  onClick={() => seleccionarTalla(producto.id, talla)}
                  className={`px-4 py-1 rounded-full transition ${
                    tallasSeleccionadas[producto.id] === talla
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {talla}
                </button>
              ))}
            </div>

            <button
              onClick={añadirProducto}
              disabled={!tallasSeleccionadas[producto.id]} 
              className={`mt-4 px-4 py-2 text-white rounded-full transition ${
                tallasSeleccionadas[producto.id] ? "bg-black" : "bg-gray-300"
              }`}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default OpcionesHombre;
