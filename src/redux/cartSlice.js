// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // 购物车的商品数组
};

// 创建购物车 slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 添加商品到购物车
    addToCart: (state, action) => {
      const item = action.payload;  //action携带的数据，即商品信息
      // 如果商品已经在购物车中，增加数量
      const existingItem = state.items.find(i => i.title === item.title);
      if (existingItem) {
        state.items = state.items.map(i =>
            i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
          );
      } else {
        state.items= [...state.items, {...item, quantity: 1}];
      }
    },
    // 从购物车中移除商品
    removeFromCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find((i) => i.title === item.title);
        if (existingItem) {
          if (existingItem.quantity > 1) {
            // 如果数量大于 1，减少数量
            state.items = state.items.map((i) =>
              i.title === item.title ? { ...i, quantity: i.quantity - 1 } : i
            );
          } else {
            // 如果数量为 1，移除该商品
            state.items = state.items.filter((i) => i.title !== item.title);
          }
        }
      },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;   // 导出 cartReducer
