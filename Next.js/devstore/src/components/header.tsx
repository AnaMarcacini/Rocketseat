import Link from 'next/link'
import { Search } from 'lucide-react' // importanto icones de busca e de loja
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return ( //<div>Headre</div>
    <div className="flex items-center justify-between">
      {/*  coloca os elementos ocupando toda a extremidade */}
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
  <SearchForm/>

      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

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