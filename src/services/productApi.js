const API_URL = "/api";

async function request(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Unable to fetch marketplace data.");
  }

  return response.json();
}

export async function getProducts() {
  return request("/products");
}

export async function getProductById(productId) {
  return request(`/products?id=${productId}`);
}