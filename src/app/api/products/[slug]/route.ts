import data from '../data.json'
import { z } from 'zod'


export async function GET( _: Request,  { params }: { params: { slug: string } },) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const slug = z.string().parse(params.slug) // verifica se é uma string // parse != safeParse - parce dispara erro o outro não (o outro gera um boleano para falar se deu certo ou não --> ver em env.ts)
  // se der erro não continua a execução
  const product = data.products.find((product) => product.slug === slug)
  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }
  return Response.json(product)
}
//old
// export async function GET(request: Request, other:any) {
    
//     console.log(other)//{ params: { slug: 'moletom' } }
//   return Response.json({})
// }
