import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: 720 }}>
      <h1>Demo SSR (TanStack Start + Nitro → Vercel)</h1>
      <p>
        App de exemplo para o tutorial. Não é um export do Lovable. Usa TanStack
        Start com Nitro e <code>preset: &quot;vercel&quot;</code>.
      </p>
      <p>
        Sem o preset da Vercel, um build pensado para Cloudflare costuma
        completar o deploy e ainda assim devolver 404 na URL ao vivo.
      </p>
      <p>
        <Link to="/sobre">Abrir rota /sobre</Link>
      </p>
    </main>
  )
}
