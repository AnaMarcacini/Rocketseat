import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react' // importanto icones de busca e de loja
import Image from 'next/image'

export function Header() {
  return ( //<div>Headre</div>
    <div className="flex items-center justify-between"> 
    {/*  coloca os elementos ocupando toda a extremidade */}
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">

          {/* 
          "flex
          
          w-[320px] -with fixo de 320px
           items-center 
           gap-3 
           rounded-full 
           bg-zinc-900 
           px-5 py-3 pading lateral e vertical
           ring-zinc-700 - borda lateral com a cor cinza mais clara
          
          */}
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700"></div>
        {/* Barra que divide o usuario  do carrinho
        
        w-px : with de 1 px
        h-4: hight 16
        bg-zinc-700 
        */}

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/AnaMarcacini.png" // precisso permitir o dominio do github para acessar a essa imagem - arquivo next.config.js (next.config.mjs)
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}