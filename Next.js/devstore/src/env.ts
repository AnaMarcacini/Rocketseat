import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL:z.string().url()
//   qual formato que eu espero que o NEXT_PUBLIC_API_BASE_URL seja?
// espero que seja uma string no formato de url
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
//   variavel de ambiente não é uma url

  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  ) // flatten - tranforma os erros que deram na validação em um formato mais legivel

  throw new Error('Invalid environment variables.')
  // para a aplicação
}

export const env = parsedEnv.data
// exporta as variaveis de ambiente