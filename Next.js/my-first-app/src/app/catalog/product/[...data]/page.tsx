// 'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data
  console.log(params) // printa isso no terminal do codigo no servidor e não no inspencionar do chrome

  function addToCart(){
    console.log("adicionou no carrinho")
  }
  //server components = padrão do next => não usa javascript no lado do cliente
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <button onClick={addToCart}>AdicionarCarrinho</button>
    </div>

  )
}


// pasta com [] significa parametro que pode ser pego pela função usando as props