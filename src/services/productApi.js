const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

/**
 * Small API layer.
 *
 * Components never talk directly to json-server. This keeps data access
 * replaceable when a real backend is introduced later.
 */
async function request(path) {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getProducts() {
  return request("/products");
}

export async function getProductById(productId) {
  return request(`/products/${productId}`);
}
