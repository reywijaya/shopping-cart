import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<Product, "quantity">>) => {
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
            }
        },
        resetCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
