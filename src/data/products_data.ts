import { IProductItem } from "../components/product_item/interface/i_product_item";

const PRODUCTS_DATA: IProductItem[] = [
    {
        id: "01",
        name: "Название товара 1",
        image: 'https://i.ytimg.com/vi/MfFAsIkqtc8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCChpgqee1NrOzbdd3qehlyP52D0g',
        price: 99,
        favorites: false, 
    }, 
    {
        id: "02",
        name: "Название товара 2",
        image: 'https://i.ytimg.com/vi/MfFAsIkqtc8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCChpgqee1NrOzbdd3qehlyP52D0g',
        price: 99,
        favorites: false, 
    }, 
    {
        id: "03",
        name: "Название товара 3",
        image: 'https://i.ytimg.com/vi/MfFAsIkqtc8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCChpgqee1NrOzbdd3qehlyP52D0g',
        price: 99,
        favorites: false, 
    },
    {
        id: "04",
        name: "Название товара 4",
        image: 'https://i.ytimg.com/vi/MfFAsIkqtc8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCChpgqee1NrOzbdd3qehlyP52D0g',
        price: 99,
        favorites: false, 
    }
];

export const getProducts = (): Promise<IProductItem[]> => {
  return new Promise<IProductItem[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
    reject(new Error('Server shutdowned, sorry, we have trubles'))
    }
    else {
        resolve(PRODUCTS_DATA);
    }
    }, 2000);
  });
};
