import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import { Metadata } from 'next'
import { AddToCartButton } from '@/components/add-to-cart-button'
interface ProductProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}


// geração estática : cria uma versão da pagina em cache 

export async function generateStaticParams() { // função deve ter esse nome
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}



async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}


export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      {/* dividir em 3 colunas (2 para a imagem e uma para o conteudo) */}

      <div className="col-span-2 overflow-hidden">
        {/*  overflow -  se a imagem não couber ele só corta*/}
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100} // qualidade padrão é 80
        />
      </div>

      <div className="flex flex-col justify-center px-12"> {/**espaçamento dos dois lados */}
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {/* mt-2 margin top */}
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
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
        <AddToCartButton productId={product.id} />

      </div>
    </div>
  )
}