export default async function postContact(name, email, message) {
  const apiURl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiURl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok. Send help.");
  }

  return response.json();
}
