import { createContext, useContext, ReactNode, useState  } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"


interface ShoppingCartProvider {
    children: ReactNode
}

interface CartItem {
    id: number 
    qty: number
}

interface ShoppingCartContextType {
    cartItems: CartItem[]
    handleIncreaseProductQty: (id: number)=> void
  
    handleDecreaseProductQty: (id: number)=> void
    getProductQty: (id: number)=> number
    handleRemoveProduct: (id: number)=> void
   
    cartQty: number
    setIsLogin: boolean
    isLogin: boolean

    handleLogin: () => void
    handleLogout: () => void
}

export  const ShoppingCartContext= createContext({} as ShoppingCartContextType)

export const useShoppingCartContext= ()=> {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProvider) {

    const [cartItems, setCartItems]= useLocalStorage<CartItem[]>("cartItems", [])

    // const [cartItems, setCartItems]= useLocalStorage<CartItem[]>("cartItem", [])

    // localStorage.getItem()


    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
            const selectedItem = currentItems.find((item) => item.id == id);
            if (selectedItem == null) {
                // If the item is not in the cart, add it
                return [...currentItems, { id: id, qty: 1 }];
            } else {
                // If the item is already in the cart, update its quantity
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const handleDecreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
            const selectedItem = currentItems.find((item) => item.id == id);
            if (selectedItem?.qty === 1) {
                // If the item is not in the cart, add it
                return [...currentItems, { id: id, qty: 1 }];
            } else {
                // If the item is already in the cart, update its quantity
                return currentItems.map((item) => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const getProductQty= (id:number) => {
       return cartItems.find(item => item.id == id)?.qty || 0
    }

    const handleRemoveProduct= (id: number) => {
        setCartItems(currentItems => currentItems.filter(item => item.id != id ))


    }

    const cartQty= cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
    const [isLogin, setIsLogin]= useState(false)

    const handleLogin= () =>{
        setIsLogin(true)
    }
    const handleLogout= () =>{
        setIsLogin(false)
    }

    return(
        <ShoppingCartContext.Provider 
        value={{

                cartItems, handleIncreaseProductQty,
                handleDecreaseProductQty, getProductQty,
                handleRemoveProduct,
                cartQty,
                isLogin,
                handleLogin,
                handleLogout

                }}>

            {children}

        </ShoppingCartContext.Provider>
    )
}