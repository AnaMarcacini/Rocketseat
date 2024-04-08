'use client' // continua rodando no também no servidor porem manda o js para o cliente
// componente await não é recomendado par client components
// html da pagina de um componente de servidor é gerado uma unica vez -> não sofre mudanças no futuro (componente é gerado uma unica vez) diferente do component -> por isso é ruim de usar um use client como uma função async 
// um client component não é garantido que será executado uma unica vez então irá buscar os dados e esperar no await varias vezes

// usar useEffect para buscar dados de api e não o await
interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente) TODO O JS SERÁ ENVIADO PARA O NAVEGADOR --> porem boa parte do codigo a baixo é estático assim podemos separar os dados que precisam ser use clients em um componente a parte para evitar o envio de js para o navegador faremos isso a seguir no prox commit 

export default function Product({ params }: ProductProps) {

  const [productId, size, color] = params.data
  console.log(params) // printa isso no terminal se o 'use client' estiver comentado ou seja no servidor e se o 'use client' estiver descomentado isso printa no inspencionar do chrome e também no servidor

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