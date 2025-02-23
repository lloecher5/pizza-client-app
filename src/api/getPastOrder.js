export default async function getPastOrder(order) {
  const apiURl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiURl}/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
