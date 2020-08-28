const _products = [
    {
        "id": "01",
        "titulo": "Guitarra eléctrica",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://picsum.photos/id/145/640/480",
        "inventario": "6",
        "precio": "1200.00"
    },
    {
        "id": "02",
        "titulo": "iPhone",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://picsum.photos/id/160/640/480",
        "inventario": "15",
        "precio": "1800.00"
    },
    {
        "id": "03",
        "titulo": "Reloj antiguo",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://picsum.photos/id/175/640/480",
        "inventario": "10",
        "precio": "200.00"
    },
    {
        "id": "04",
        "titulo": "Cámara Vintage",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://picsum.photos/id/250/640/480",
        "inventario": "12",
        "precio": "950.00"
    },
    {
        "id": "05",
        "titulo": "Taza Cubana",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://picsum.photos/id/30/640/480",
        "inventario": "50",
        "precio": "99.00"
    },
    {
        "id": "06",
        "titulo": "Amazón Kindle",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://picsum.photos/id/367/640/480",
        "inventario": "20",
        "precio": "99.00"
    },
    {
        "id": "07",
        "titulo": "Auto de Colección",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://i.picsum.photos/id/1071/3000/1996.jpg?hmac=rPo94Qr1Ffb657k6R7c9Zmfgs4wc4c1mNFz7ND23KnQ",
        "inventario": "3",
        "precio": "50000.00"
    },
    {
        "id": "08",
        "titulo": "Piano",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.",
        "imagen": "https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E",
        "inventario": "7",
        "precio": "20000.00"
    },
];
  
export default {
    getProducts(cb) {
      setTimeout(() => cb(_products), 100);
    },
  
    buyProducts(products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
          ? cb()
          : errorCb();
      }, 100);
    }
};