# lovable-deploy-examples

Repositório público de exemplo para o tutorial **como publicar um app feito com IA (stack tipo Lovable) em domínio próprio**, via GitHub → Cloudflare / Vercel.

**Isto não é um export real do Lovable.** Os apps foram criados do zero com a mesma família de stack que o fluxo de publicação costuma receber: Vite + React (SPA) e TanStack Start (SSR). O passo Lovable → GitHub **não foi reproduzido** aqui; ele segue a [documentação oficial do Lovable (Git sync)](https://docs.lovable.dev/integrations/github).

## Apps

| Pasta | Stack | O que demonstra |
| --- | --- | --- |
| `spa/` | Vite + React + React Router | SPA estática. No Pages, sem `404.html` na raiz, o fallback SPA é automático; o exemplo também declara `public/_redirects`. Na Vercel, `vercel.json` configura o rewrite para abrir `/sobre` no reload. |
| `ssr-cloudflare/` | TanStack Start + `@cloudflare/vite-plugin` | SSR em **Cloudflare Workers** (não é Pages só estático). |
| `ssr-vercel/` | TanStack Start + Nitro (`preset: "vercel"`) | SSR na Vercel com Nitro. O exemplo já inclui o preset da Vercel; não foi ensaiado um deploy com preset Cloudflare que falhasse antes. Um 404 também pode ter outras causas, como pasta raiz ou saída incorreta. |

## Subdomínios de teste (pedrosatin.com)

| App | Provedor | Hostname |
| --- | --- | --- |
| SPA | Cloudflare Pages | `demo-spa-cf.pedrosatin.com` (Pages Active) |
| SPA | Vercel | `demo-spa-vercel.pedrosatin.com` |
| SSR | Cloudflare Workers | `demo-ssr-cf.pedrosatin.com` (Workers domain Active) |
| SSR | Vercel | `demo-ssr-vercel.pedrosatin.com` |

## Comandos locais

```bash
# SPA
cd spa && npm install && npm run build

# SSR Cloudflare Workers
cd ssr-cloudflare && npm install && npm run build

# SSR Vercel (Nitro)
cd ssr-vercel && npm install && npm run build
```

## Referências oficiais

- Lovable Git sync: https://docs.lovable.dev/integrations/github
- Lovable deploy externo: https://docs.lovable.dev/tips-tricks/external-deployment-hosting
- Lovable domínio próprio (plano pago): https://docs.lovable.dev/features/custom-domain
- Cloudflare Pages (React): https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/
- Cloudflare Pages SPA rendering: https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering
- TanStack Start hosting: https://tanstack.com/start/latest/docs/framework/react/guide/hosting
- Nitro Vercel: https://nitro.build/deploy/providers/vercel
- Vercel rewrites: https://vercel.com/docs/project-configuration#rewrites

O domínio precisa ser registrado e renovado à parte. Vercel Hobby é para uso pessoal não comercial, conforme https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage.
