import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: 640 }}>
      <h1>Demo SPA (Vite + React)</h1>
      <p>
        App de exemplo para o tutorial de publicação. Não é um export do Lovable;
        usa a mesma stack Vite + React que o fluxo GitHub → hospedagem costuma
        receber.
      </p>
      <p>
        <Link to="/sobre">Abrir rota /sobre</Link>
      </p>
    </main>
  )
}

function About() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: 640 }}>
      <h1>Sobre</h1>
      <p>
        Se esta página abrir ao recarregar a URL direta, o rewrite SPA do
        provedor está correto.
      </p>
      <p>
        <Link to="/">Voltar</Link>
      </p>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
