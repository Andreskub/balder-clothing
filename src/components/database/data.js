const data = [
    {
        id: 1,
        title: "Buzo Amarillo",
        img: "../../assets/hoodies/hoodie-1.jpg",
        price: 500,
        detail: "Rye Rye",
        stock: 10,
        category: "hoodies"
    },
    {
        id: 2,
        title: "Buzo Azul",
        img: "././assets/hoodies/hoodie-2.jpg",
        price: 7000,
        detail: "Aloha",
        stock: 5,
        category: "hoodies"
    },
    {
      id: 3,
      title: "Buzo Marron",
      img: "././assets/hoodies/hoodie-3.jpg",
      price: 5000,
      detail: "Aloha",
      stock: 7,
      category: "hoodies"
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