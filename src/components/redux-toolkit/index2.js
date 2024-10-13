import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [], // Array to store the cart items
    totalAmount: 0, // Total price of the items in the cart
    totalQuantity: 0,
    setSelectedItem: {},
    setShowCart: false,
   
  },
  reducers: {
    additem: (state, action) => {
      const newItem = action.payload; // The item we want to add
   
      state.totalQuantity++;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      ); // Check if it's already in the cart
 // Increase the total number of items in the cart

      if (!existingItem) {
        // If the item is NOT in the cart, add it
        state.cartItems.push({
          id: newItem.id,
          name: newItem.title,
          img: newItem.image,
          rating: newItem.rating.rate,
          buyers: newItem.rating.count,
          price: newItem.price,
          quantity: 1, // Set the quantity to 1 for a new item
          totalPrice: newItem.price,
      
        });
      } else {
        // If the item IS in the cart, increase the quantity
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price; // Increase the total price for this item
      }

      // Update the total price of the cart
      state.totalAmount += newItem.price;
    },
    hideCart: (state) => {
      state.showCart = false; // Hide the cart
    },
    showCart: (state) => {
      state.setShowCart = true;
     
    },
    SelectedItem: (state, action) => {
      state.setSelectedItem = action.payload;

    },
    decreaseQuantity: (state, action) => {
      const itemIdToDelete = action.payload;  // Assuming payload contains the id of the item
      const findInCart = state.cartItems.find((item) => item.id === itemIdToDelete);
  
      state.totalQuantity--;
      if (findInCart) {
        // Check if quantity is more than 1 before decrementing
        if (findInCart.quantity > 1) {
          findInCart.quantity--;  // Decrement quantity

          // Update total price for the item
          findInCart.totalPrice -= findInCart.price;  // Adjust total price for that item
        } else {
          // If quantity is 1, remove the item from the cart
          state.cartItems = state.cartItems.filter(item => item.id !== itemIdToDelete);
        }
      }
    },
    increasequanity:(state,action)=>{
      state.totalQuantity++;
      const itemIdToIncrease = action.payload; 
      const findInCart = state.cartItems.find((item) => item.id === itemIdToIncrease );
      if(findInCart){
        findInCart.quantity++;
      
        findInCart.totalPrice+=findInCart.price;
      }
    },
    deleteitem:(state,action)=>{
      const ItemtoDelete=action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== ItemtoDelete);

    }
  },
});
export const { additem, hideCart,showCart,SelectedItem,decreaseQuantity ,increasequanity,deleteitem} = cartslice.actions;
export default cartslice.reducer;
