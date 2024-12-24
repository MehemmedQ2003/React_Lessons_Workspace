import './App.css'
import Container from './Container'
import Product from './Product'

function App() {

  return (
    <>
      <Container>
        <Product productName="Shoes" productPrice="$100"/>
        <Product productName="T-Shirt" productPrice="$50"/>
        <Product productName="Scarf" productPrice="$10"/>
        <Product productName="Shorts" productPrice="$20"/>
      </Container> 
    </>
  )
}

export default App
