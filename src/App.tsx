import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import ProdutosComponent from './containers/Produtos'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProdutosComponent />
      </div>
    </Provider>
  )
}

export default App
