export default async function getPastOrders(page) {
  const apiURl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiURl}/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
