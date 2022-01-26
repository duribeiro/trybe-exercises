---
marp: true
---

# Códigos SQL

## BANCO DE DADOS

### Cria um banco de dados com o nome especificado.
```sql
CREATE DATABASE nome_do_banco_de_dados;
```

> Sinônimo de CREATE DATABASE, também cria um banco de dados.

```sql
CREATE SCHEMA nome_do_banco_de_dados;
```
---

### Verifica se o banco de dados ainda não existe.

```sql
IF NOT EXISTS nome_do_banco_de_dados;
```

> Essa verificação é comumente utilizada junto ao `CREATE DATABASE` para evitar a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.

```sql
CREATE DATABASE IF NOT EXISTS albuns;
```

### Lista todos os bancos de dados existentes.

```sqL
SHOW DATABASE nome_do_banco_;
```

### Define o banco de dados ativo para uso no momento.

```sql
USE nome_do_banco_de_dados;
```