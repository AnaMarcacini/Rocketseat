import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured',{
    // cache:'force-cache' // default // essa requisição é feita apenas uma vez e é cacheada por um tempo indeterminado || ou seja a aplicação não iria requirir de novo esses dados 
    // cache:'no-store' // não é cacheada é sempre carregada do total zero|| usada para coisas em tempo real || atualiza a cada refresh
    // no caso vamos usar o next e não cache
    next:{
      revalidate:10, // o primeiro usuario que acessar a requisição (e ela não estiver em cache) coloca os dados em cache e todos os usuarios que acessarem nos proximos 10 segundos vão receber esses dados
      // após 10 segundos o proximo usuario acessa os dados atualizados
    }
  })

  const products = await response.json()

  return products
}

/** 
 * Cache e Memoization
 * 
 * Memoization no react :'useMemo' / 'memo' / 'useCallback -- funcionalidade do react não do next funciona para qualquer framework do react
 * Memoization : não repete calculo ou variavel quando não é necessário
 * 
 * exemplo impedir que o getFeaturedProducts()  execute duas vezes
 * 
 * Impede que uma mesma requisição para a mesma rota com os mesmos parametros durante o mesmo fluxo de renderização de uma mesma pagina seja feita duas vezes
 * 
 * Cache : manter um dado armazenado para não recalcular no futuro
 * Cache - Next
 * Se eu mudar de pagina e precisar fazer fetch de todo de novo o Memoization não se aplica. Assim temos que ter um controle de cache
 * 
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title:'Home'
  
};
export default async function Home() {

  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts() // a requisição dos dados ocorre no lado do servidor antes dele chegar na pagina || tanto que se desabilitar o javascript do navegador ele continua buscando os dados de forma correta
  // desestruturando o array de produtos o primeiro produto é o maior produto e os demais produtos vão ser concatenados em uma lista  
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {/* 
      max-h-[860px] altura maxima
       grid-cols-9 9 colunas
        grid-rows-6 6 linhas
        gap-6 24px de distancia entre elas*/}
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        {/* 
        group -> permite alterar os estilos dos elementos internos com base no elemento 
        col-span-6 row-span-6 - ocupa 6 linhas e 6 colunas
        rounded-lg arredonda os cantos
        overflow-hidden - faz a imagem não sair do conteiner (da caixa )

        justify-center items-end - alinha no meio da largura e em baixo do conteiner da imagem
        */}
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500" // elemento pai estiver com hover fazer a animação
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span> {/* truncate - se o texto não couber em  max-w-[280px] ele coloca ... (3 pontos)*/}
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => {
        return (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={920}
            height={920}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
            </span>
          </div>
        </Link>
        )
      })}
    </div>
  )
}


