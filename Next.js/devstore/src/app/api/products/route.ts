import data from './data.json'// carrega o json com os dados

export async function GET() {
  return Response.json(data.products)
  // return Response.json({mensagem: "ola mundo"})

  // route renders são tipo funções back-end:
  // não recomendado --> linkado com o front
}
