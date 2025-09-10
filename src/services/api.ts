import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Product = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    obterProducts: builder.query<Product[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useObterProductsQuery } = productsApi
