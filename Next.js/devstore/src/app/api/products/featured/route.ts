import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured)
// produtos com o featured = true (produtos em destaque)
  return Response.json(featuredProducts)
}
