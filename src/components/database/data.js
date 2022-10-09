const data = [
    {
        id: 1,
        title: "Furior",
        img: "/assets/hoodies/hoodie-1.png",
        price: 500,
        detail: "Special Edition",
        stock: 10,
        category: "hoodies"
    },
    {
        id: 2,
        title: "Pink Fury",
        img: "/assets/hoodies/hoodie-2.jpg",
        price: 7000,
        detail: "Aloha",
        stock: 5,
        category: "hoodies"
    },
    {
      id: 3,
      title: "Classic Balder",
      img: "/assets/hoodies/hoodie-3.png",
      price: 5000,
      detail: "Classic",
      stock: 7,
      category: "hoodies"
    },
    {
      id: 101,
      title: "Puffer",
      img: "/assets/jackets/jacket-1.png",
      price: 5000,
      detail: "Classic",
      stock: 7,
      category: "jackets&coats"
    },
    {
      id: 201,
      title: "Engine",
      img: "/assets/shirts/shirt-1.jpg",
      price: 5000,
      detail: "Classic",
      stock: 7,
      category: "shirts"
    },
    {
      id: 202,
      title: "Kola",
      img: "/assets/shirts/shirt-2.jpg",
      price: 5000,
      detail: "Limited",
      stock: 7,
      category: "shirts"
    }
]

export function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
  }
  
export function getOneItem(idParams) {
    return new Promise((resolve) => {
        let itemReq = data.find((item) => {
          return item.id === Number(idParams);
        });
        setTimeout(() => resolve(itemReq), 1000);
  });
}

export function getItemsByCategory(idCategoryParams) {
  return new Promise((resolve) => {
      let arrayFilterCourses = data.filter(
          (item) => item.category === idCategoryParams
      );
      setTimeout(() => resolve(arrayFilterCourses), 1000);
  });
}