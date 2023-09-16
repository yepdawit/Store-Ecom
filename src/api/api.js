import axios from "axios";
const api_url = "http://fakestoreapi.com";

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${api_url}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

// api call for login
export async function loginUser(username, password) {
  try {
    const response = await axios.post(
      `${api_url}/auth/login`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in: ", error);
  }
}
