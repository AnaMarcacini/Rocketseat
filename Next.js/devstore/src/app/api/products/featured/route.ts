import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const featuredProducts = data.products.filter((product) => product.featured)
// produtos com o featured = true (produtos em destaque)
  return Response.json(featuredProducts)
}


//Isso daqui é uma criação de um backend improvisado -> recomendado o backend ser separado do front
    // Axios -> é uma forma de fazer solicitações para o backends||  reper em cima de um api antiga da web chamada XMLHttpRequest

    // fech API :  é um axios do navegador 
      // caching 