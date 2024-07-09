export const getProducts = async (): Promise<any> => {
  const res = await fetch('https://fakestoreapi.com/products');

  return res.json();
};
