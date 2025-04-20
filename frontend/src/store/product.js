import { create } from "zustand";


export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) 
        {
            return { success: false, message: "Please provide all fields" };
        }
        
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await response.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "created successfully" };
    },

    fetchProducts: async () => {
        const response = await fetch("/api/products");
        const data = await response.json();
        set({ products: data.data });
    },

    deleteProduct: async (id) => {
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        set((state) => ({products: state.products.filter((product) => product._id !== id) }));
        return { success: true, message: "deleted successfully" };
    },
    updateProducts: async (id, updatedProduct) => {
        try {
            const response = await fetch(`/api/products/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedProduct),
            });
        
            const data = await response.json();
        
            // Optional: Update local state too
            set((state) => ({
              products: state.products.map((p) =>
                p._id === id ? { ...p, ...updatedProduct } : p
              ),
            }));
        
            return { success: true, message: "Product updated successfully" };
          } catch (error) {
            console.error("Update failed:", error);
            return { success: false, message: "Failed to update product" };
          }
    },
})); 

