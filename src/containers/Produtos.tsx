import Produto from '../components/Produto'
import * as S from './styles'
import { useObterProductsQuery } from '../services/api'

const ProductsComponent = () => {
  const { data: Products, isLoading, isError } = useObterProductsQuery()

  if (isLoading) {
    return <div>Carregando Produtos...</div>
  }

  if (isError) {
    return <div>Erro ao carregar, api inativa</div>
  }

  return (
    <S.Products>
      {Products?.map((produto) => (
        <Produto key={produto.id} product={produto} />
      ))}
    </S.Products>
  )
}

export default ProductsComponent
