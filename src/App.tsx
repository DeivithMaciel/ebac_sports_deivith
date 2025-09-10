import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import ProductsComponent from './containers/Produtos'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProductsComponent />
      </div>
    </Provider>
  )
}

export default App
