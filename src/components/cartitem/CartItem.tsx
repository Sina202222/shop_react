
import { useEffect, useState } from "react";
import Button from "../button/Button"
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem{
  id: number
  qty: number
}

function CartItem( {id, qty}: ICartItem ) {

  const [product,setProduct]= useState<IProduct>()

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct, 
  } = useShoppingCartContext()
    
 
  useEffect(()=> {
      getProduct(id).then((data)=> {
      setProduct(data);
      });

    }, []);


  return (
    <div className="flex flex-row-reverse mt-4 border-b py-3">
       
        <Link to={`/product/${id}`} >
            <img  className=' rounded w-28 ' 
                src={product?.image}
                alt="" />
        </Link>

        <div className="mt-2 p-4">
            <h3 className=" mx-3 text-right">  {product?.title}</h3>
            <Button onClick={()=> handleIncreaseProductQty(id) } variant="primary"> + </Button>
            <span className=" mx-3"> {qty} </span>
            <Button onClick={()=> handleDecreaseProductQty(id) } variant="primary"> - </Button>
            <Button onClick={()=> handleRemoveProduct(id) } className="m-2" variant="danger"> حذف کردن </Button>

        </div>
    </div>
  )
}

export default CartItem