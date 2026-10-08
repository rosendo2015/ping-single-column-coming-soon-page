# Ping | Página de lançamento

Página responsiva de "em breve" para o Ping. A interface apresenta a marca, uma prévia do dashboard e um formulário para visitantes demonstrarem interesse em receber novidades.

## Prévia

### Desktop

![Referência visual da página Ping em desktop](src/assets/design/desktop-design.jpg)

### Mobile

![Referência visual da página Ping em dispositivos móveis](src/assets/design/mobile-design.jpg)

### Ilustração do produto

![Prévia do dashboard Ping](src/assets/images/illustration-dashboard.png)

As imagens de desktop e mobile acima são referências visuais incluídas no projeto. A ilustração do dashboard é o asset usado na página.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- Tailwind CSS 4, integrado pelo plugin `@tailwindcss/vite`
- `tailwind-variants` para variantes e slots de estilo
- Oxlint para lint
- Libre Franklin como fonte da interface

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Começar

Instale as dependências:

```sh
npm install
```

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

O Vite mostrará no terminal a URL local, normalmente `http://localhost:5173/`.

## Comandos

| Comando             | Descrição                                                    |
| ------------------- | ------------------------------------------------------------ |
| `npm run dev`       | Inicia o servidor de desenvolvimento com atualização rápida. |
| `npm run typecheck` | Verifica os tipos TypeScript sem gerar arquivos.             |
| `npm run lint`      | Executa o Oxlint.                                            |
| `npm run build`     | Verifica os tipos e gera a versão de produção em `dist/`.    |
| `npm run preview`   | Serve localmente o build de produção.                        |

## Funcionalidade da página

- Exibe a marca Ping, o título, o formulário e a ilustração do dashboard.
- Em telas menores que 601 px, o campo e o botão ficam empilhados; em telas maiores, ficam lado a lado.
- O campo usa a validade HTML do navegador (`type="email"` e `required`) e mostra uma mensagem customizada com borda vermelha para emails ausentes ou inválidos.
- Ao enviar um email válido, a página mostra uma confirmação acessível com `role="status"`.
- Os links sociais estão no rodapé.

**Limite atual:** o formulário é apenas demonstrativo. O envio não chama uma API, não cadastra emails e não persiste dados. Os links sociais também devem ser atualizados para os perfis oficiais antes da publicação.

## Componentes reutilizáveis

Os componentes estão em `src/components/` e aceitam propriedades HTML nativas do elemento correspondente.

### `Button`

Botão tipado com as propriedades padrão de um `<button>` e variantes de aparência e tamanho.

| Propriedade | Valores                     | Padrão    |
| ----------- | --------------------------- | --------- |
| `variant`   | `primary`, `secondary`      | `primary` |
| `size`      | `medium`, `large`           | `medium`  |
| `className` | Classes Tailwind adicionais | —         |

```tsx
<Button type="submit" variant="primary" size="medium">
  Notify Me
</Button>
```

### `Input`

Campo com label visualmente oculto, mas disponível para leitores de tela. A propriedade `error` aplica o estado visual de erro, define `aria-invalid` e associa a mensagem por `aria-describedby`.

| Propriedade | Descrição                                                 |
| ----------- | --------------------------------------------------------- |
| `id`        | Identificador do campo; obrigatório e associado ao label. |
| `label`     | Nome acessível do campo; obrigatório.                     |
| `error`     | Mensagem opcional de erro.                                |
| `size`      | `medium` (padrão) ou `large`.                             |
| `className` | Classes Tailwind adicionais para o controle.              |

```tsx
<Input
  id="email"
  name="email"
  type="email"
  label="Seu email"
  placeholder="voce@exemplo.com"
  required
/>
```

### `Text`

Componente tipado para texto com elemento semântico configurável pela propriedade `as`.

| Propriedade | Valores                           | Padrão |
| ----------- | --------------------------------- | ------ |
| `as`        | Elemento HTML ou componente React | `p`    |
| `variant`   | `title`, `body`, `caption`        | `body` |
| `className` | Classes Tailwind adicionais       | —      |

```tsx
<Text as="h1" variant="title">
  We are launching soon!
</Text>
```

## Estilos e variantes

O Tailwind é carregado em `src/index.css`. A seção `@theme` define os tokens da marca: azul principal, azul claro, vermelho, cinza, cor de texto e fonte. Para manter estilos próximos dos componentes:

- `Button.tsx` define variantes de aparência e tamanho com `tv()`.
- `Input.tsx` usa slots e variantes para estados, tamanhos, label e mensagem de erro.
- `Text.tsx` define variantes tipográficas.
- `src/styles/page.styles.ts` centraliza slots do layout e a variante de formulário `inline` ou `stacked`.

Para incluir uma classe adicional, use `className`; para uma opção reutilizável, prefira acrescentar uma variante em `tv()`.

## Estrutura do projeto

```text
.
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Text.tsx
│   ├── styles/
│   │   └── page.styles.ts
│   └── assets/
│       ├── design/
│       └── images/
├── style-guide.md
├── tsconfig.json
└── vite.config.js
```

## Assets e referência

- `src/assets/images/logo.svg`: marca Ping.
- `src/assets/images/illustration-dashboard.png`: ilustração exibida pela página.
- `src/assets/images/favicon-32x32.png`: favicon.
- `src/assets/design/`: referências desktop, mobile e estados de erro.
- `style-guide.md`: cores e tipografia de referência do projeto.

## Contato

Entre em contato ou acompanhe meu trabalho:

- **Nome:** Francisco Rosendo
- **E-mail:** [rosendc30@gmail.com](mailto:rosendc30@gmail.com)
- **GitHub:** [github.com/rosendo2015](https://github.com/rosendo2015)
- **LinkedIn:** [linkedin.com/in/francisco-rosendo-coelho](https://www.linkedin.com/in/francisco-rosendo-coelho/)
