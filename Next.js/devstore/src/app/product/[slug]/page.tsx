import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'


// async function getProduct(slug: string): Promise<Product> {
//   const response = await api(`/products/${slug}`, {
//     next: {
//       revalidate: 60 * 60, // 1 hour
//     },
//   })

//   const product = await response.json()

//   return product
// }


export default  function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3"> 
    {/* dividir em 3 colunas (2 para a imagem e uma para o conteudo) */}

      <div className="col-span-2 overflow-hidden">
        {/*  overflow -  se a imagem não couber ele só corta*/}
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100} // qualidade padrão é 80
        />
      </div>

      <div className="flex flex-col justify-center px-12"> {/**espaçamento dos dois lados */}
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400"> 
        {/* mt-2 margin top */}
          Moletom fabricado com 88% de algodão e 12% de poliéster
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$129
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}