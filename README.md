Projeto utilizando [React.js](https://react.dev/), Node-v18.18.0.

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [Node-18.18.0](https://nodejs.org/en)

## Instalação

Realizar o clone do repositório

```bash
git clone https://github.com/thalesmaiaa/btg-clone.git
```

Instalar as dependências

```bash
yarn
```

Iniciar o servidor:

```bash
yarn dev
```

## Estrutura do Projeto

A estrutura do projeto segue o seguinte padrão:

```
src/
  ├─ app/
  │   ├─ components/
  │   │   ├─ componentA/
  │   │   │   ├─ componentA.tsx
  │   │   │   └─ styles.ts
  │   │   │
  │   │   ├─ componentB/
  │   │   │   ├─ componentB.tsx
  │   │   │   └─ styles.ts
  │   │   │
  │   │   └─ index.ts
  │   │
  │   ├─ sections/
  │   │   ├─ sectionA/
  │   │   │   ├─ sectionA.tsx
  │   │   │   └─ styles.ts
  │   │   │
  │   │   ├─ sectionB/
  │   │   │   ├─ sectionB.tsx
  │   │   │   └─ styles.ts
  │   │   │
  │   │   └─ index.ts
  │   │
  │   ├─ mocks/
  │   │   ├─ mock.json
  │   │
  │   ├─ assets/
  │   │   ├─ ...
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   ├
  │   │
  ├   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   │
  │   └─ ...
  ├─ package.json
  ├─ tsconfig.json
```

Neste exemplo, estamos exportando `ComponentA` e `ComponentB` a sintaxe `export { ComponentName }`.

Permitindo importar esses componentes em outros lugares do seu código da seguinte maneira:

```tsx
import { ComponentA, ComponentB } from '@/components';
```

Isso permite que você importe vários componentes de forma mais concisa e legível, diretamente da pasta `components`. Certifique-se de adicionar todos os seus componentes no arquivo `index.ts` para que possam ser importados dessa forma.

Essa lógica do components pode ser replicada para outros folders como `hooks` e `pages`, por exemplo.
