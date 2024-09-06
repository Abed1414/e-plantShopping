import { createSlice } from '@reduxjs/toolkit';

// Define the cart slice
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add a new item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity++;
      } else {
        // If item does not exist, add it to the cart with a quantity of 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // Reducer to remove an item from the cart based on its name
    removeItem: (state, action) => {
      // Filter out the item with the matching name from the cart
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart by name
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Update the item's quantity
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to use in store.js
export default CartSlice.reducer;
