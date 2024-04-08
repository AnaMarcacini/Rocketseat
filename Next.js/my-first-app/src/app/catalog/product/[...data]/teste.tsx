export function Teste(){
    return <h1 onClick={() => {}} >Hello Word</h1> // mesmo com o on click como ele é chamado por um componente que já é use client ele não dá erro
}

// Assim se ele é chamado por um client compoent ele não será tratado como server component

// Isso se chama Client Boundaries
// Assim se eu chamar outro componente aqui dentro ele também será client components e assim por diante