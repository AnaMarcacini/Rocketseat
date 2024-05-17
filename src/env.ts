// import { z } from 'zod'

// const envSchema = z.object({
//   NEXT_PUBLIC_API_BASE_URL: z.string().url(),
//   APP_URL:z.string().url()
// //   qual formato que eu espero que o NEXT_PUBLIC_API_BASE_URL seja?
// // espero que seja uma string no formato de url
// })

// const parsedEnv = envSchema.safeParse(process.env)

// if (!parsedEnv.success) {
// //   variavel de ambiente não é uma url

//   console.error(
//     'Invalid environment variables',
//     parsedEnv.error.flatten().fieldErrors,
//   ) // flatten - tranforma os erros que deram na validação em um formato mais legivel

//   throw new Error('Invalid environment variables.')
//   // para a aplicação
// }

// export const env = parsedEnv.data
// // exporta as variaveis de ambiente


import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})