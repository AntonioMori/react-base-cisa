# Template de Desenvolvimento Web

Este é um template para desenvolvimento web utilizando **React**, **Vite**, **TypeScript**, **SWC (Speedy Web Compiler)**, **ESLint**, **ESLint Stylistic**, **Zustand**, **AWS Sandbox (SDK, Lambda, API Gateway)** e ++.



## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:
- **Node.js** (versão 14 ou superior)
- **npm** (versão 6 ou superior) ou **yarn**



## Como inicializar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/cisaitemm/react-base-cisa.git
```

### 2. Instale as dependências
```bash
npm install
```


## Scripts disponíveis

Aqui estão os principais scripts definidos no `package.json` para gerenciar e construir o projeto:

### `npm run dev`
- Inicializa o servidor de desenvolvimento usando o Vite.
- **Uso:** Durante o desenvolvimento, para visualizar as alterações em tempo real.

### `npm run build`
- Compila o projeto em TypeScript e gera os arquivos otimizados para produção.
- **Uso:** Quando o projeto está pronto para ser implantado em um ambiente de produção.

### `npm run preview`
- Executa uma prévia da versão de produção do projeto gerada pelo `build`.
- **Uso:** Para verificar como o projeto será exibido em produção.

### `npm run lint`
- Analisa o código em busca de problemas de formatação e boas práticas, usando o ESLint.
- **Uso:** Antes de commits ou PRs, para garantir que o código está de acordo com os padrões definidos.

### `npm run fix`
- Corrige automaticamente problemas detectados pelo ESLint sempre que possível.
- **Uso:** Após rodar o `npm run lint`, para ajustar erros de formatação ou pequenos problemas. Ou para uso direto caso deseje realizar as correções de maneira direta.



## Estruturação do Projeto

### 1. **Estrutura de Pastas**
A estrutura do projeto é organizada para facilitar o desenvolvimento, manutenção e escalabilidade. Abaixo está uma proposta básica:

```
src/
├── assets/  	                  # Arquivos estáticos como imagens, fontes, etc.
├── components/                  # Componentes reutilizáveis da interface
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.module.css
├── hooks/                       # Custom Hooks
├── pages/                       # Páginas do projeto (rotas principais)
│   ├── Home/
│   │   ├── index.tsx
│   │   ├── Home.test.tsx
│   │   └── Home.module.css
│   ├── About/
│       ├── index.tsx
│       ├── About.test.tsx
│       └── About.module.css
├── services/    	             # Configurações de APIs e AWS SDK
├── utils/           
│   ├── state/ # Configuração do Zustand (gerenciamento de estado)
│                   # Funções utilitárias e helpers
├── App.tsx                      # Arquivo principal do React (root onde serão aplicados Authenticators, contexts e routes)
├── main.tsx                     # Arquivo de inicialização com ReactDOM
└── vite-env.d.ts                # Tipos específicos do Vite

public/
├── index.html                   # Template principal
├── favicon.ico                  # Favicon do site

.vscode/
├── extensions.json              # Extensões recomendadas para o desenvolvimento
├── settings.json                # Configurações padrões para a utilização correta do estlint e testes estáticos


```

---

### 2. **Tecnologias Utilizadas**
- **React**: Biblioteca popular para criar interfaces de usuário reutilizáveis e baseadas em componentes.
- **Vite**: Build tool moderno e super-rápido para desenvolvimento web.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, garantindo código mais seguro e escalável.
- **SWC (Speedy Web Compiler)**: Compilador rápido para transpilar código TypeScript e JavaScript, melhorando o desempenho.
- **ESLint + Stylistic**: Ferramentas para garantir a qualidade do código e consistência no estilo (Testes estáticos).
- **Vitest**: Framework de testes ("Vite Native Test Runner") responsável por organizar e executar o ambiente de testes.
- **React Testing Library**: Testing library, Jest serve como o ambiente que executa e organiza os testes, enquanto a Testing Library ajuda a interagir com o DOM durante os testes.
- **Zustand**: Biblioteca leve para gerenciamento de estado global, oferecendo simplicidade e flexibilidade.
- **AWS SDK**: Para integração com serviços AWS como Lambda e API Gateway.
- **AWS Lambda e API Gateway**: Estrutura para construir e expor APIs serverless de forma escalável.
- **Material UI**: Biblioteca de componentes react que implementa o "Google's Material Design".

---

### 3. **Como Contribuir**
Para contribuir com este projeto:

1. Faça um fork do repositório.
2. Clone o projeto para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/nome-repositorio.git
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
5. Após as alterações, faça commit e push:
   ```bash
   git commit -m "Descrição da feature"
   git push origin minha-feature
   ```
6. Abra um Pull Request detalhando as mudanças.

---

### 4. **To-Do List**
- [x] Configuração inicial do projeto com Vite.
- [x] Integração do SWC para compilação.
- [x] Linter configurado com ESLint e Stylistic.
- [x] Configuração de rotas com `react-router-dom`.
- [x] implementar vitest
- [ ] Configuração do Zustand para gerenciamento de estado.
- [ ] Implementação de exemplo básico de AWS Lambda e API Gateway.
- [ ] Testes unitários e integração com CI/CD.

---

### 5. **Deploy**
O deploy preferencial será realizado na **AWS**:
- **Pipeline Sugerido**:
  1. Build do projeto com `vite build`.
  2. Upload dos arquivos estáticos no S3 para servir como frontend.
  3. Configuração de APIs utilizando **AWS Lambda** e **API Gateway**.
  4. Gerenciamento de permissões e autenticação via **IAM** ou **Cognito**.

Comandos úteis:
```bash
# Deploy de funções Lambda
aws lambda update-function-code --function-name sua-funcao --zip-file fileb://funcao.zip

# Configuração do API Gateway
aws apigateway import-rest-api --body 'api-config.json'
```

---
adicionado jest com ts-jest para funcionamento do jest em vite, excluindo a possibilidade não implementada de testes nos
recursos:

- import.meta:
O Jest não compreende import.meta nativamente porque ele é baseado em CJS por padrão, enquanto import.meta é específico de ESM.

- Transformações .vue
O Jest precisa de transformadores específicos para entender e processar os arquivos .vue. Sem isso, ele trata os arquivos como texto bruto, gerando erros.

## Conclusão
Esses recursos foram projetados para melhorar a experiência de desenvolvimento e a performance no Vite. Eles facilitam o trabalho com módulos dinâmicos e o desenvolvimento em frameworks como Vue.js. Se você está usando o Jest, precisará configurar transformadores adicionais (como o vite-jest) para que esses recursos sejam corretamente interpretados.



## eslint-plugin-jest 

Esse trecho da documentação explica como configurar o ESLint para evitar erros ao usar Jest nos arquivos de teste. O problema principal que ele aborda é que o ESLint, por padrão, não conhece os globais do Jest (como describe, it, expect, etc.), o que pode gerar erros como no-undef. A seguir, explicarei cada solução apresentada:



## Correção
Para corrigir os dois erros acima, utilizaremos a mudança para o ViTest, que é o "tester runner" nativo do vite que tem uma performance muito melhor que a do jest e é mais bem integrável com o vite

"This is Vitest, a next generation testing framework powered by Vite."


