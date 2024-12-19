# Configuração do ESLint

O ESLint está configurado para manter boas práticas de código e estilos consistentes. Abaixo está uma explicação das principais configurações:

### Principais Plugins Configurados

#### 1. `globals`
- Define os objetos globais disponíveis no ambiente de navegador.

#### 2. `@eslint/js`
- Configura regras básicas recomendadas para JavaScript.

#### 3. `typescript-eslint`
- Fornece suporte ao TypeScript no ESLint, incluindo regras específicas para verificação de tipos.

#### 4. `eslint-plugin-react`
- Adiciona suporte para análise de código relacionado ao React.

#### 5. `eslint-plugin-react-refresh`
- Verifica a consistência de componentes React usados em ambientes de Hot Module Replacement (HMR).

#### 6. `@stylistic/eslint-plugin`
- Fornece regras específicas para estilização de código e formatação, garantindo consistência.

### Regras de Configuração

#### React Rules
- `"react-refresh/only-export-components": "warn"`: Força que apenas componentes sejam exportados em arquivos React.
- `"react/react-in-jsx-scope": "off"`: Desativa a exigência de importar `React` em arquivos JSX (não necessário com Vite).

#### Stylistic Rules

1. **`@stylistic/array-bracket-spacing`**
  - **Descrição**: Adiciona espaçamento dentro de colchetes de arrays.
  - **Exemplo**:
    ```javascript
    // Errado
    const arr = [1,2,3];

    // Correto
    const arr = [ 1, 2, 3 ];
    ```

2. **`@stylistic/arrow-parens`**
  - **Descrição**: Exige parênteses sempre em arrow functions.
  - **Exemplo**:
    ```javascript
    // Errado
    const func = x => x + 1;

    // Correto
    const func = (x) => x + 1;
    ```

3. **`@stylistic/arrow-spacing`**
  - **Descrição**: Adiciona espaço antes e depois da seta em arrow functions.
  - **Exemplo**:
    ```javascript
    // Errado
    const func = (x)=>x + 1;

    // Correto
    const func = (x) => x + 1;
    ```

4. **`@stylistic/block-spacing`**
  - **Descrição**: Adiciona espaço antes e depois de blocos dentro de chaves.
  - **Exemplo**:
    ```javascript
    // Errado
    if (true){return false;}

    // Correto
    if (true) { return false; }
    ```

5. **`@stylistic/no-trailing-spaces`**
  - **Descrição**: Não permite espaços em branco no final das linhas.
  - **Exemplo**:
    ```javascript
    // Errado
    const value = 42; 

    // Correto
    const value = 42;
    ```

6. **`@stylistic/brace-style`**
  - **Descrição**: Define o estilo das chaves de blocos.
  - **Exemplo**:
    ```javascript
    // Errado
    if (true)
    {
        return false;
    }

    // Correto
    if (true) {
        return false;
    }
    ```

7. **`@stylistic/comma-dangle`**
  - **Descrição**: Força o uso de vírgulas no final de objetos, arrays, e listas de parâmetros multiline.
  - **Exemplo**:
    ```javascript
    // Errado
    const obj = {
        a: 1,
        b: 2
    };

    // Correto
    const obj = {
        a: 1,
        b: 2,
    };
    ```

8. **`@stylistic/comma-spacing`**
  - **Descrição**: Adiciona espaço após vírgulas.
  - **Exemplo**:
    ```javascript
    // Errado
    const arr = [1 ,2 ,3];

    // Correto
    const arr = [1, 2, 3];
    ```

9. **`@stylistic/comma-style`**
  - **Descrição**: Garante que as vírgulas estejam no final da linha e não no início.
  - **Exemplo**:
    ```javascript
    // Errado
    const arr = [
        1
        , 2
        , 3
    ];

    // Correto
    const arr = [
        1,
        2,
        3,
    ];
    ```

10. **`@stylistic/curly-newline`**
- **Descrição**: Obriga a quebra de linha após abrir e antes de fechar blocos com chaves.
- **Exemplo**:
	```javascript
	// Errado
	if (true) { return false; }

	// Correto
	if (true) {
			return false;
	}
	```

11. **`@stylistic/implicit-arrow-linebreak`**
- **Descrição**: Adiciona a seta da arrow function na mesma linha que o corpo da função.
- **Exemplo**:
  ```javascript
  // Errado
  const fn = () =>
      console.log("Hello");

  // Correto
  const fn = () => console.log("Hello");
  ```

12. **`@stylistic/indent`**
- **Descrição**: Usa tabulação para indentação ao invés de espaços.
- **Exemplo**:
  ```javascript
  // Errado
  function example() {
      console.log("Indented with spaces");
  }

  // Correto
  function example() {
  	console.log("Indented with tabs");
  }
  ```

13. **`@stylistic/indent-binary-ops`**
- **Descrição**: Usa tabulação para a indentação de operadores binários (e.g., `&&`, `||`).
- **Exemplo**:
  ```javascript
  // Errado
  const result = value1 &&
      value2;

  // Correto
  const result = value1 &&
  	value2;
  ```


14. **`react/jsx-closing-bracket-location`**
- **Descrição**: Alinha o fechamento da tag JSX (`/>`) corretamente.
- **Exemplo**:
  ```jsx
  // Errado
  <Component
      prop1="value"
    />

  // Correto
  <Component
      prop1="value"
  />
  ```

15. **`react/jsx-closing-tag-location`**
- **Descrição**: Alinha o fechamento da tag com a abertura.
- **Exemplo**:
  ```jsx
  // Errado
  <div>
      Content
      </div>

  // Correto
  <div>
      Content
  </div>
  ```

16. **`@stylistic/jsx-curly-newline`**
- **Descrição**: Adiciona quebra de linha após abrir chaves em JSX.
- **Exemplo**:
  ```jsx
  // Errado
  const component = {
      prop: {nested: true}}

  // Correto
  const component = {
      prop: {
          nested: true
      }
  }
  ```

17. **`@stylistic/jsx-first-prop-new-line`**
- **Descrição**: Adiciona quebra de linha após a primeira propriedade se houver mais de uma e a tag estiver em mais de uma linha.
- **Exemplo**:
  ```jsx
  // Errado
  <Component prop1="value"
      prop2="value"
  />

  // Correto
  <Component
      prop1="value"
      prop2="value"
  />
  ```

18. **`@stylistic/jsx-function-call-newline`**
- **Descrição**: Força que a chamada de função jsx fique em uma linha separada
- **Exemplo**:
  ```jsx
  // Errado
  <Component>{callFunction()}</Component>

  // Correto
  <Component>
      {callFunction()}
  </Component>
  ```





19. **`@stylistic/jsx-indent` e `@stylistic/jsx-indent-props`**
- **Descrição**: Faz a indentação de JSX e seus atributos com tabulação.
- **Exemplo**:
  ```jsx
  // Errado
  <Component
      prop1="value"
      prop2="value"
  />

  // Correto
  <Component
  	prop1="value"
  	prop2="value"
  />
  ```

20. **`@stylistic/jsx-max-props-per-line`**
- **Descrição**: Limita a quantidade de props por linha.
- **Exemplo**:
  ```jsx
  // Errado
  <Component prop1="value" prop2="value" prop3="value" prop4="value" prop5="value" />

  // Correto
  <Component
      prop1="value"
      prop2="value"
      prop3="value"
  />
  ```
21. **`@stylistic/jsx-pascal-case`**
- **Descrição**: Obriga a definição de nomes através da convenção de nomenclatura de Pascal

22. **`@stylistic/jsx-props-no-multi-spaces`**
- **Descrição**: Não permite mais de um espaço em branco entre as props na mesma linha 
- **Exemplo**:
  ```jsx
  // Errado
  <Divider       variant="middle"  orientation="vertical"  />
  // Correto
  <Divider variant="middle" orientation="vertical" />
  ```

23. **`@stylistic/jsx-self-closing-comp`**
- **Descrição**: Força o uso de tags auto-fechadas para componentes sem filhos.
- **Exemplo**:
  ```jsx
  // Errado
  <Component></Component>

  // Correto
  <Component />
  ```

24. **`@stylistic/jsx-tag-spacing`**
- **Descrição**: Não permite espaçamento na abertura ou fechamento da tag.
- **Exemplo**:
  ```jsx
  // Errado
  < Componente/> ou  <Componente/ >

  // Correto
  <Componente/>
  ```

25. **`@stylistic/jsx-wrap-multilines`**
- **Descrição**:  Força com que o return tenha () quando o componente jsx tiver mais de uma linha
- **Exemplo**:
  ```jsx
  // Errado
  return <div>
    <Componente />
  </div>;

  // Correto
  return (
    <div>
      <Componente />
    </div>
  );
  ```

26. **`@stylistic/multiline-ternary`**
- **Descrição**: força que o ternário seja multilinha .
- **Exemplo**:
  ```jsx
  isValid
  ? <ComponenteValido>
  : null
  ```



27. **`@stylistic/no-extra-semi`**
- **Descrição**: Não permite o uso de ponto e vírgula extra.
- **Exemplo**:
  ```javascript
  // Errado
  const x = 10;;

  // Correto
  const x = 10;
  ```

28. **`@stylistic/quotes`**
- **Descrição**: Garante o uso de aspas duplas.
- **Exemplo**:
  ```javascript
  // Errado
  const str = 'string';

  // Correto
  const str = "string";
  ```

29. **`@stylistic/semi`**
- **Descrição**: Garante o uso de ponto e vírgula ao final de cada instrução.
- **Exemplo**:
  ```javascript
  // Errado
  const x = 10

  // Correto
  const x = 10;
  ```

30. **`@stylistic/func-call-spacing`**  
   - **Descrição**: Proíbe espaços entre o nome da função e os parênteses de chamada.  
   - **Exemplo**:  
     ```javascript
     // Errado
     myFunction ();

     // Correto
     myFunction();
     ```

31. **`@stylistic/keyword-spacing`**
  - **Descrição**: Adiciona espaço antes e depois de palavras-chave como `if`, `else`, `for`.
  - **Exemplo**:
    ```javascript
    // Errado
    if(true){
        return false;
    }

    // Correto
    if (true) {
        return false;
    }
    ```

32. **`@stylistic/no-floating-decimal`**  
   - **Descrição**: Proíbe o uso de decimais "flutuantes" sem o zero inicial ou final.  
   - **Exemplo**:  
     ```javascript
     // Errado
     const value = .5;
     const anotherValue = 2.;

     // Correto
     const value = 0.5;
     const anotherValue = 2.0;
     ```

33. **`@stylistic/no-mixed-operators`**  
   - **Descrição**: Não permite misturar operadores diferentes sem o uso de parênteses para explicitar a precedência.  
   - **Exemplo**:  
     ```javascript
     // Errado
     const result = a + b * c;

     // Correto
     const result = a + (b * c);
     ```

34. **`@stylistic/no-multi-spaces`**  
   - **Descrição**: Proíbe o uso de múltiplos espaços consecutivos em qualquer lugar do código.  
   - **Exemplo**:  
     ```javascript
     // Errado
     const a  = 5;

     // Correto
     const a = 5;
     ```

35. **`@stylistic/camelcase`**  
   - **Descrição**: Exige que variáveis e funções sigam o padrão camelCase.  
   - **Exemplo**:  
     ```javascript
     // Errado
     const my_variable = 10;

     // Correto
     const myVariable = 10;
     ```

36. **`@stylistic/object-curly-spacing`**  
   - **Descrição**: Garante o uso de espaços dentro das chaves de objetos.  
   - **Exemplo**:  
     ```javascript
     // Errado
     const obj = {key: value};

     // Correto
     const obj = { key: value };
     ```

37. **`@stylistic/eol-last`**  
   - **Descrição**: Garante que haja uma linha em branco ao final do arquivo.  
   - **Exemplo**:  
     ```javascript
     // Errado
     console.log('Hello World');
     ```

     ```javascript
     // Correto
     console.log('Hello World');

     ```



