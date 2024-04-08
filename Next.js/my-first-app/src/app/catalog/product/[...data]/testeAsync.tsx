export async function TesteAsync(){

    await new Promise((resolve) => setTimeout(resolve,1000))
    // return <h1 onClick={() => {}} >Hello Word</h1> // agora o componente on click dá erro já que ele é chamado no componente server e passado como parametro para o componente add to cart
    return <h1 >Hello Word TesteAsync</h1> 
    // a unica forma de se passar um server component para um client component
}

// Assim se ele é chamado por um client compoent ele não será tratado como server component

// Isso se chama Client Boundaries
// Assim se eu chamar outro componente aqui dentro ele também será client components e assim por diante