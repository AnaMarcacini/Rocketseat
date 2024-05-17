'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter() // apenas para client components -->  por isso separamos o formulário de header para o search-form 
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // evita redirecionamento padrão do formulario html

    const formData = new FormData(event.currentTarget)// pegando os dados 
    // pega quem disparou o evento no caso o formulario event.currentTarget
    const data = Object.fromEntries(formData) // transfomando em objeto

    const query = data.q // acesso a query de busca usando q

    if (!query) {
        // se o campo não foi preenchido
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}



// <form action="/search" method='GET' className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"> 
// {/*action="/search" method='GET' faz um get na rota search  */}

//   {/* 
//   "flex
  
//   w-[320px] -with fixo de 320px
//    items-center 
//    gap-3 
//    rounded-full 
//    bg-zinc-900 
//    px-5 py-3 pading lateral e vertical
//    ring-zinc-700 - borda lateral com a cor cinza mais clara
  
//   */}
//   <Search className="w-5 h-5 text-zinc-500" />

//   <input
//     placeholder="Buscar produtos..."
//     className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
//   />
// </form>