import { GithubProfile } from "@/components/github-profile"
import { LongWaitComponent } from "@/components/long-wait-component"
export default function Home() {


  return <div>
    <h1>Home!</h1>
    <GithubProfile/> 
    <LongWaitComponent/>
    {/* a pagina inteira espera o GithubProfile carregar para carregar os demais conteudos (exemplo o h1) */}
    {/* o next por padrão aguarda toda a página carregar para renderizar para o usuario */}
  </div>
}