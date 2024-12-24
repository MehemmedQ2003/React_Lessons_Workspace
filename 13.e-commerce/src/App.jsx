/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { FaManatSign } from "react-icons/fa6";
import { calculateBasket, removeBasket, setDrawer } from './redux/clices/basketSlice';
import { useEffect } from 'react';

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} anchor='right' onClose={() => dispatch(setDrawer())}>
          <h1 style={{margin: "20px 0", textAlign: "center", fontSize: "40px"}}>Basket</h1>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{padding: "10px", margin: "10px", border: "2px solid #1E5C93", borderRadius: "10px", width: "350px"}}>
                    <img style={{marginRight: "10px"}} src={product.image} width={40} height={40}/>
                    <p style={{width: "1000px", padding: "0 5px"}}>{product.title} --- ({product.count})</p>
                    <p style={{fontWeight: "bold", marginRight: "5px", width: "60px", display: "flex", gap: "2px"}}>{product.price} <FaManatSign /></p>
                    <button style={{marginLeft: "auto", marginRight: "5px", backgroundColor: "#1E5C93", color: "white", border: "none", width: "20px", cursor: "pointer"}} onClick={() => dispatch(removeBasket(product.id))}>X</button>
                  </div>
                </div>
              )
            })
          }
          <h3 style={{textAlign: "center", margin: "20px 40px", backgroundColor: "#1E5C93", color: "white", padding: "10px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center"}}>Total Amount: {totalAmount.toFixed(2)} <FaManatSign /></h3>
        </Drawer>
        <Footer />
      </PageContainer>
    </div>
  )
}

export default App
