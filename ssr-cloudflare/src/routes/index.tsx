import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: 720 }}>
      <h1>Demo SSR (TanStack Start → Cloudflare Workers)</h1>
      <p>
        App de exemplo para o tutorial. Não é um export do Lovable. Usa TanStack
        Start com o adaptador oficial da Cloudflare (
        <code>@cloudflare/vite-plugin</code>
        ), que roda SSR em Workers.
      </p>
      <p>
        Isso é diferente de Cloudflare Pages servindo só arquivos estáticos de
        uma SPA.
      </p>
      <p>
        <Link to="/sobre">Abrir rota /sobre</Link>
      </p>
    </main>
  )
}
