import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">{/* 
      mx-auto: centraliza o conteudo da pagina horizontalmente
      
      
      grid 
      
      min-h-screen a tela pelo menos ocupa o espaço total da tela (se for maior ela cria barra de rolagem)
              vantagem é a possibilidade de colocar itens na parte inferior da pagina
      
      w-full width 100% ||para telas menores ele nn gera barra de rolagem horizontal
      
      max-w-[1600px] - para telas maiores ele nn ultrapassa 1600px de largura barra de rolagem horizontal
      
      
      grid-rows-app =grid-rows-[min-content_max-content]  => app configurado no arquivo tailwind.config.ts
       gap-5 5px de espaçamento 
       px-8 py-8 pading horizontal e vertical
      
      */}
      <Header />
      {children}
    </div>
  )
}
