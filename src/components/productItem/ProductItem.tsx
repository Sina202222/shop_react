import { IProduct } from "../../types/server"

type TProductItem= IProduct

// interface ProductItem{

// }b 

function ProductItem({image, title, price, description}: TProductItem) {

  return (
    <div className=" shadow border rounded pb-2  "  >
        <img className=" rounded-t " src={image} alt=""  />       
        <div className=" flex justify-between  flex-row-reverse px-4 mt-2"  >
            <h3 className=" line-clamp-2 font-bold w-50" > {title}</h3> 
            <span className=" font-bold"> {price} تومان </span>
        </div>
        <div className=" px-1 mt-1 " >
          <p className=" line-clamp-2 text-right text-gray-500 " >   {description}    </p>
        </div>
    </div>
  )
}

export default ProductItem