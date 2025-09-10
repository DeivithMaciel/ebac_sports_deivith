import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store/index'

const Header = () => {
  const favorites = useSelector((state: RootReducer) => state.favoritos.items)
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)

  const valorTotal = itemsCart.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorites.length} Favoritos</span>
        <img src={cesta} />
        <span>
          {itemsCart.length} items, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
