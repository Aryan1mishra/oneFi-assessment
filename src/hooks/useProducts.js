import { useEffect, useState } from "react";
import { getProductById, getProducts } from "../services/productApi";

export function useProducts(search = "") {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let active = true;

    async function load() {
      setState((previous) => ({ ...previous, loading: true, error: null }));

      try {
        const products = await getProducts();
        if (!active) return;

        const normalized = search.trim().toLowerCase();
        const filtered = normalized
          ? products.filter((product) =>
              `${product.name} ${product.brand} ${product.category}`
                .toLowerCase()
                .includes(normalized)
            )
          : products;

        setState({ data: filtered, loading: false, error: null });
      } catch (error) {
        if (!active) return;
        setState({ data: [], loading: false, error: error.message });
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [search]);

  return state;
}

export function useProduct(productId) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const product = await getProductById(productId);
        if (active) setState({ data: product, loading: false, error: null });
      } catch (error) {
        if (active) setState({ data: null, loading: false, error: error.message });
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [productId]);

  return state;
}
