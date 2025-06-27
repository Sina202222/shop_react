import Container from "../../components/container/Container"
import CartItem from "../../components/cartitem/CartItem"
import Button from "../../components/button/Button"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"


function Cart() {

  const {cartItems}= useShoppingCartContext()

  return (
    <div>
        <Container>
          <div className="">
            {
              cartItems.map(item=>(
                <CartItem {...item} />
              ))
            }
      
          </div>

          <div className=" text-right  bg-gray-200 p-3 "> 
              <p> تومان 3,000  : قیمت  کل   </p>
              <p> تومان 2,000 :  تخفیف شما </p>
              <p>  تومان 1,000 : قیمت  نهایی </p>
          </div>

          <Button className=" " variant="success">
            ثبت سفارش
          </Button >

           
        </Container>
    </div>
  )
}

export default Cart