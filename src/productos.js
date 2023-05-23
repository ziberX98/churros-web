import "./productos.css";

function Productos() {
  const products = [
    {
      id: 1,
      nombre: "Churros Tradicionales(x6)",
      descripcion:
        "Nulla facilisi. Quisque ultricies sem a metuspulvinar, congue commodo nisi gravida. Cras a dignissim arcu.",
      precio: 8000,
      image: "https://img.freepik.com/free-photo/churro-tray_23-2147985153.jpg?w=996&t=st=1684276627~exp=1684277227~hmac=cd460e2c34b11719e5c64c57c2151ee4161157e468078a611d220183fe6d963a"

    },
    {
      id: 2,
      nombre: "Torta tres leches(LB)",
      descripcion:
        "Nulla facilisi. Quisque ultricies sem a metuspulvinar, congue commodo nisi gravida. Cras a dignissim arcu.",
      precio: 20000,
      image: "https://images.pexels.com/photos/10342001/pexels-photo-10342001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      nombre: "Churros Rellenos(x6)",
      descripcion:
        "Nulla facilisi. Quisque ultricies sem a metuspulvinar, congue commodo nisi gravida. Cras a dignissim arcu.",
      precio: 14000,
      image: "https://unareceta.com/wp-content/uploads/2016/08/receta-churros-rellenos-818x580.jpg"
    },
    {
      id: 4,
      nombre: "Malteadas",
      descripcion:
        "Nulla facilisi. Quisque ultricies sem a metuspulvinar, congue commodo nisi gravida. Cras a dignissim arcu.",
      precio: 8000,
      image: "https://img.freepik.com/free-photo/chocolate-freppe-smoothie-whip-cream_1150-10929.jpg?w=360&t=st=1684276960~exp=1684277560~hmac=eabd46ae384e88d92cbb795f6a0e4dee6159ebc1abd17c131be3dd5fac9c229f"
    },
  ];

  return (
    <div className="contain">
      <div className="bgimgproduct">
        <div className="bgtitulo">
          <h1 className="titulo1">Productos</h1>
        </div>
      </div>
      <div className="productContainer">
        {products.map((item) => {
          return (
            <div className="product">
              <h2>{item.nombre}</h2>
              <img className="imagenp" src={item.image}></img>
              <p>{item.descripcion}</p>
              <p>Precio: ${item.precio}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Productos;
