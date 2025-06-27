import {Route, Routes} from "react-router-dom"

import Store from "./pages/store/Store";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
// import Login from "./pages/login/Login";
import Contacts from "./components/contacts/Contacts";
// import PrivateRoute from "./privateRoute/PrivateRoute";


function App() {

  return (
    <ShoppingCartProvider>
      <Layout>
          <Routes>

            <Route path="/" element={ <Home /> } /> 
            {/* <Route path="/login" element={ <Login /> } />  */}
            <Route path="/contacts" element={ <Contacts /> } /> 


            <Route path="/store" element={ <Store /> } /> 
            <Route path="/product/:id" element={ <Product /> } /> 

            {/* <Route path="/login" element={<Login />} ></Route> */}
            <Route path="/cart" element={ <Cart /> } /> 
           
            {/* <Route element={<PrivateRoute />}>
              <Route path="/cart" element={ <Cart /> } /> 
            </Route> */}

          </Routes>
        </Layout>
    </ShoppingCartProvider>
      

  )
}
export default App