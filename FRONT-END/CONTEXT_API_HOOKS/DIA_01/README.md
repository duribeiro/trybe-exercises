# CONTEXT API E REACT HOOKS

O context api veio para resolver o problema das props drilling. Ou seja o problema de passar uma prop de pai para filho e assim sucessivamente até a informação chegue no ultimo filho na arvore de componentes.

# COMO PASSOS PARA CRIAR UM CONTEXTO

## 1 - Criar um contexto

<!-- src/ -->
import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);
