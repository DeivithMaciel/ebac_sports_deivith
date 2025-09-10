import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import favoritesReducer from './reducers/favorites'
import { productsApi } from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: cartReducer,
    favoritos: favoritesReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
