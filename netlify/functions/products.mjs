import products from "../../mock-api/db.json" with { type: "json" };

export default async (req) => {
  const url = new URL(req.url);
  const productId = url.searchParams.get("id");

  if (req.method !== "GET") {
    return new Response(
      JSON.stringify({ message: "Method not allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  if (productId) {
    const product = products.products.find(
      (item) => String(item.id) === String(productId)
    );

    if (!product) {
      return new Response(
        JSON.stringify({ message: "Product not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return Response.json(product);
  }

  return Response.json(products.products);
};

export const config = {
  path: "/api/products"
};