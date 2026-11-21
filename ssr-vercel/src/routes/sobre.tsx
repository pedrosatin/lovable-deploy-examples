import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sobre')({ component: About })

function About() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: 720 }}>
      <h1>Sobre (SSR + Nitro)</h1>
      <p>
        Esta rota é renderizada no servidor. Recarregar a URL direta deve
        devolver HTML com o título desta página.
      </p>
      <p>
        <Link to="/">Voltar</Link>
      </p>
    </main>
  )
}
