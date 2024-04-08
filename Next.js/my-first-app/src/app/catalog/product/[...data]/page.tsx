
import { AddToCartButton } from './add-to-cart-button'
interface ProductProps {
  params: {
    data: string[]
  }
}
import { TesteAsync } from './testeAsync'
// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente) TODO O JS SERÁ ENVIADO PARA O NAVEGADOR --> porem boa parte do codigo a baixo é estático assim podemos separar os dados que precisam ser use clients em um componente a parte para evitar o envio de js para o navegador
export default async function Product({ params }: ProductProps) {

  const [productId, size, color] = params.data
  console.log(params) // printa isso no terminal se o 'use client' estiver comentado ou seja no servidor e se o 'use client' estiver descomentado isso printa no inspencionar do chrome e também no servidor
  const response = await fetch('https://api.github.com/users/diego3g')
  const user = await response.json()
  //server components = padrão do next => não usa javascript no lado do cliente
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <AddToCartButton> {/* client component */}
        <TesteAsync /> {/* server component */}
      </AddToCartButton>
    </div>

  )
}


// pasta com [] significa parametro que pode ser pego pela função usando as props