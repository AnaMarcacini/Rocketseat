'use client' // continua rodando no também no servidor porem manda o js para o cliente
// componente await não é recomendado par client components
// html da pagina de um componente de servidor é gerado uma unica vez -> não sofre mudanças no futuro (componente é gerado uma unica vez) diferente do component -> por isso é ruim de usar um use client como uma função async 
// um client component não é garantido que será executado uma unica vez então irá buscar os dados e esperar no await varias vezes

// usar useEffect para buscar dados de api e não o await

import { ReactNode, useState } from 'react'
import { Teste } from './teste'

export function AddToCartButton({children}: {children : ReactNode}) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
    console.log(count)
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho {count}</button>
      <Teste/>
      {children}
    </div>)
}