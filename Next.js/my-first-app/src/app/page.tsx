import { GithubProfile } from "@/components/github-profile"
import { Suspense } from "react" // suspender 

/* a pagina inteira espera o GithubProfile carregar para carregar os demais conteudos (exemplo o h1) */
/* o next por padrão aguarda toda a página carregar para renderizar para o usuario */
// o suspense eu consigo carregar de forma assincrona (componentes lentos não atrasam componentes rápidos)
import { LongWaitComponent } from "@/components/long-wait-component"
export default function Home() {


  return <div>
    <h1>Home!</h1>
    <Suspense fallback={<p>Isso é mostrando enquanto o GithubProfile não carrega</p>}>
      <GithubProfile />
    </Suspense>
    <Suspense fallback={<p>Isso é mostrando enquanto o LongWaitComponent não carrega</p>}>
      <LongWaitComponent />
    </Suspense>
  </div>
}