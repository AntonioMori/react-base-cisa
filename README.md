# Template de Desenvolvimento Web

Este é um template para desenvolvimento web utilizando **React**, **Vite**, **TypeScript**, **SWC (Speedy Web Compiler)**, **ESLint**, **ESLint Stylistic**, **Zustand** e **AWS Sandbox (SDK, Lambda, API Gateway)**.



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
├── state/   			         # Configuração do Zustand (gerenciamento de estado)
├── utils/                       # Funções utilitárias e helpers
├── App.tsx                      # Arquivo principal do React (root onde serão aplicados Authenticators, contexts e routes)
├── main.tsx                     # Arquivo de inicialização com ReactDOM
└── vite-env.d.ts                # Tipos específicos do Vite

public/
├── index.html                   # Template principal
├── favicon.ico                  # Favicon do site
```

---

### 2. **Tecnologias Utilizadas**
- **React**: Biblioteca popular para criar interfaces de usuário reutilizáveis e baseadas em componentes.
- **Vite**: Build tool moderno e super-rápido para desenvolvimento web.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, garantindo código mais seguro e escalável.
- **SWC (Speedy Web Compiler)**: Compilador rápido para transpilar código TypeScript e JavaScript, melhorando o desempenho.
- **ESLint + Stylistic**: Ferramentas para garantir a qualidade do código e consistência no estilo.
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
- [x] Configuração do Zustand para gerenciamento de estado.
- [x] Linter configurado com ESLint e Stylistic.
- [ ] Configuração de rotas com `react-router-dom`.
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

testes com jest, adicionar eslint verificação de imports e exports,

na parte dos testes a gente tem que pensar , em quais partes mais dao erros durante o desenvolvimento e quais são
mais chatas de testar? 

formulários
rotas funcionais, assim que entra um update deve testar todas as rotas,




