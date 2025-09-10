import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../services/api'
import { add } from '../../store/reducers/cart'
import { addOrRemove } from '../../store/reducers/favorites'
import { RootReducer } from '../../store'
import * as S from './styles'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootReducer) => state.favorites.items)
  const isFavorite = favorites.some((f) => f.id === product.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={product.imagem} alt={product.nome} />
      </S.Capa>
      <S.Titulo>{product.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(product.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(addOrRemove(product))}>
        {isFavorite ? '- Remover dos favorites' : '+ Adicionar aos favorites'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(add(product))}>
        Adicionar ao cart
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
