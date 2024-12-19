const products = [
    {
      id: "Grt223",
      name: "Remera Moderna",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 400,
      stock: 10,
      image: "/image/camiseta-modern.webp",
      category: "remeras"
    },
    {
      id: "Grt224",
      name: "Remera Travel",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 420,
      stock: 4,
      image: "/image/camiseta-travel.jpg",
      category: "remeras"
    },
    {
      id: "Hff556",
      name: "Camiseta en V basica",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 380,
      stock: 5,
      image: "/image/camiseta-v.jpg",
      category: "remeras"
    },
    {
      id: "Hff557",
      name: "Jeans modernos",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 620,
      stock: 17,
      image: "/image/jeans-rotos.jpg",
      category: "pantalones"
    },
    {
      id: "Wre442",
      name: "Pantalon deportivo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 800,
      stock: 2,
      image: "/image/pantaloens-deportivos.jpg",
      category: "pantalones"
    },
    {
      id: "Wre443",
      name: "Pantalones cargo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/pantalones-cargo.jpg",
      category: "pantalones"
    },
    {
      id: "Cfsdf223",
      name: "Nike Jordan",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/zapatillas-nike.jpg",
      category: "zapatillas"
    },
    {
      id: "Wyuy456",
      name: "Zapatillas Adidas",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/zapatillas-adidas.jpg",
      category: "zapatillas"
    },
    {
      id: "Tyuriu123",
      name: "Zapatillas Running",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/zapatillas-estampa.jpg",
      category: "zapatillas"
    },
    {
      id: "Gqweq123",
      name: "Hoddie Estampado",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/buzo-estampado.jpg",
      category: "buzos"
    },
    {
      id: "Kerer321",
      name: "Polar basico",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/polar-basico.jpg",
      category: "buzos"
    },
    {
      id: "Yayuyu555",
      name: "Hoddie basico",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
      price: 820,
      stock: 6,
      image: "/image/hoddie-basico.jpg",
      category: "buzos"
    },
  ]
  
  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      //simulamos un retraso de red de 2segundos
      setTimeout(()=>{
        resolve(products)
      }, 2000)
    })
  }
  
  export { getProducts }