const api_url = "http://fakestoreapi.com";

// Get all products
export const getProducts = async (limit, sort) => {
  try {
    const url = new URL(`${api_url}/products`);
    const params = { limit, sort };
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

// Get product from specific category
export const getProductsByCategory = async (category, limit, sort) => {
  try {
    const url = new URL(`${api_url}/products/category/${category}`);
    const params = { limit, sort };
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

// api call for login
export async function loginUser(username, password) {
  try {
    const response = await fetch(`${api_url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in: ", error);
  }
}

// api call for register
export async function registerUser(username, password) {
  try {
    const response = await fetch(`${api_url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error registering: ", error);
  }
}

// api call for getting categories
export async function getCategories() {
  try {
    const response = await fetch(`${api_url}/products/categories`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting categories: ", error);
  }
}
