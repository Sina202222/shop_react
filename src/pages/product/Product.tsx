import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import { getProduct } from '../../services/api';
import { IProduct } from '../../types/server';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

function Product() {

  const params= useParams<{id: string}>();
  const [product, setProduct]= useState<IProduct>();
  const {handleIncreaseProductQty, handleDecreaseProductQty ,getProductQty, handleRemoveProduct}= useShoppingCartContext();

  // console.log(params);

  useEffect(()=> {
    getProduct(params.id as string)
    .then(data  =>  setProduct(data));
  }, [])

  return (

    <div className='px-3'>
      <Container>
        <div className=' h-90 shadow  mt-4  grid grid-cols-12 md:space-x-8 ' >
          <div className='  bg-green-400 col-span-10 text-right p-4 ' >
            <h1 className='' > {product?.title}</h1>
            <div>
              <p className='' > ${product?.price}</p>
              <p className=' ' > {product?.description} </p>
            </div>
          </div>
          <div className=' bg-gray-500 col-span-2' >

            <img  className=' ' 
            src={product?.image}
            alt="" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <div className=''>
                <Button  onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))} 
                className=' mt-2  w-full !py-3'  variant="primary"  >
                  اضافه به سبد خرید
                </Button>
              </div>)
              : 
              (
               <>
                  <div className='grid grid-cols-3'>
                    <Button  onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))}
                    className=' mt-2  w-full !py-3'  variant="primary"  >
                      +
                    </Button>
              
                    <span className='flex justify-center items-center'>{getProductQty(parseInt(params.id as string))}</span>

                    <Button  onClick={()=> handleDecreaseProductQty(parseInt(params.id as string))} 
                    className=' mt-2  w-full !py-3'  variant="primary"  >
                      -
                    </Button>
                  </div>
                  <div>
                    <Button  onClick={()=> handleRemoveProduct(parseInt(params.id as string))}
                    className=' mt-2  w-full !py-3'  variant="danger"  >
                      حذف
                    </Button>
                  </div>
                </>
              )
            }
          </div>
        </div>  
      </Container>
    </div>
    

  )
}

export default Product