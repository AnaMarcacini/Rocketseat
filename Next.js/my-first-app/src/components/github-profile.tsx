export async function GithubProfile() { // sempre que tiver um elemento await devemos usar uma função assincrona async
    await new Promise((resolve) => setTimeout(resolve, 2000))// 2 segundos// função assincrona async || o await faz o node (nextserver) aguarda todas as instruções que tem o await desse componente finalizarem para renderizar (return) é possivel ver o tempo de demora em network
  
    const response = await fetch('https://api.github.com/users/diego3g')
    // espera o retorno da api
    const user = await response.json() // tranforma o resultado da requisição em json e espera ele finalizar essa operação
    // Streaming SSR => Ler/escrever dados de forma parcial + Server-side Rendering --> Renderizar um componente pelo lado do servidor de forma PARCIAL --> na mesma requisição ele sobe os dados e o restante dos dados da api (atualiza os dados )
    
    // basicamente uma mesma requisição pode trazer dados parciais de uma pagina e ao longo do tempo pode ir adicionando mais informações na tela
    
      // await é usado para dados que devem ser carregados imediatamente
  
    return <pre>{JSON.stringify(user, null, 2)}</pre>//faz a formatação certinha  null, 2
  }