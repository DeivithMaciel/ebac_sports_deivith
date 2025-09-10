import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../services/api'

type FavoritesState = {
  items: Product[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addOrRemove: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const exist = state.items.find((p) => p.id === product.id)
      if (exist) {
        state.items = state.items.filter((p) => p.id !== product.id)
      } else {
        state.items.push(product)
      }
    }
  }
})

export const { addOrRemove } = favoritesSlice.actions

export default favoritesSlice.reducer
