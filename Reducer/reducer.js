// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: "cart",
//     intitalState : {
//         item:[],
//     },

//     // function counterReducer(state = intitalState, action) {
//     //     switch (action.type) {
//     //         case 'INCREMENT':
//     //             return {
//     //                 ...state,
//     //                 qty: state.qty + 1,
//     //             };
//     //             case 'DECREMENT':
//     //             return {
//     //                 ...state,
//     //                 qty: state.qty - 1,
//     //             };
//     //         default:
//     //             return state;
//     //     }

//     // }   
// reducers:{
//      addItemToCart:(state,action)=> {
//         // const product = getProduct(id); 
//         // setItems((prevItems) => {
//     const item = prevItems.find((item) => (item.id == id));
//     if (!item) {
//         return [...prevItems, {
//             id,
//             qty: 1,
//             product,
//             totalPrice: product.price,
//         }];
//     }
//     else {
//         return prevItems.map((item) => {
//             if (item.id == id) {
//                 item.qty++;
//                 item.totalPrice += product.price;
//             }
//             return item;
//         });
//     }
// // });
//     },
//  getItemsCount:(state,action)=> {
//     return items.reduce((sum, item) => (sum + item.qty), 0);
// },

//  getTotalPrice:(state,action)=> {
//     return items.reduce((sum, item) => (sum + item.totalPrice), 0);
// },

// isCartItem:(state,action)=> {
//     return items.find((item) => item.id == id);
// }
// }

//     });
// export const {addItemToCart,getItemsCount,getTotalPrice,isCartItem}=cartSlice.actions

// export default cartSlice.reducer;