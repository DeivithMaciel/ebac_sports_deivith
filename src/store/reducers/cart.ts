import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '../../services/api'

type CartState = {
  items: Product[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const Product = action.payload

      if (state.items.find((p) => p.id === Product.id)) {
        alert('Produto já adicionado!')
      } else {
        state.items.push(Product)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
