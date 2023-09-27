const api_url = "https://fakestoreapi.com";

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
      let errorMessage;
      switch (response.status) {
        case 401:
          errorMessage = "Invalid username or password";
          break;
        default:
          try {
            const errorData = await response.json();
            errorMessage =
              errorData.message || `HTTP error! Status: ${response.status}`;
          } catch (jsonError) {
            errorMessage =
              response.statusText || `HTTP error! Status: ${response.status}`;
          }
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
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

// Get a single product by ID

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${api_url}/products/${id}`);

    if (!response.ok) {
      const rawText = await response.text();
      console.error(`Bad response: ${response.status} ${rawText}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data || typeof data !== "object") {
      throw new Error("Invalid JSON data received");
    }
    return data;
  } catch (error) {
    console.error("Error fetching product by ID: ", error);
    console.error("Product ID:", id);
  }
};
