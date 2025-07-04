import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container"

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// import axios from "axios";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/server";

function Store() {
  const [products, setProducts]= useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result)=> {
      setProducts(result);
    })
  }, []);
  
  return (
    <section>
      <Container>
        <h1 className=' text-right mt-5 ' > جدید ترین محصولات </h1>
        
        <div className=' grid grid-cols-4 gap-4  mt-4  ' >
         {products.map((item)=> (
          <Link key={item.id} to={`/product/${item.id}`} >
             <ProductItem {...item} />
          </Link>

         )) }
        </div>
      </Container>
      
    </section>
  )
}

export default Store