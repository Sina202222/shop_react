
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

function Login() {

    const {handleLogin}= useShoppingCartContext()

  return (
    <div>
        <Container>
            <div className=' bg-blend-color p-12 rounded'>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='password' />
                <Button onClick={handleLogin}> Login </Button>
            </div>
        </Container>
    </div>
  )
}

export default Login