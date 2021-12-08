---
marp: true
header: '**Eduardo** _Ribeiro_'
footer: 'Trybe'
style: |
  section.invert {
    background: #21232A;
    color: #f4f4f4;
  }
  section.invert h1 {
    color: #61DAFB;
  }
  section.invert h3 {
    color: #61DAFB;
  }

---
<!-- class: invert -->

# Docker Compose

O doker compose poder ser comparado a uma receita que reune os componetes, comando e imagens a serem utilizados e organiza a ordem em que cada coisa deve ser executada.

---

# Networks - Redes no Docker

o _`Docker network `_, é uma espécie de rede virtualizada que permite que você conecte containers a uma determinada rede ou quantas redes Docker desejar, de forma que esses containers possam compartilhar informações através dessa rede.

Por padrão, o Docker possui 3 redes que são criadas junto com ele: `bridge` , `none` e `host` . Cada uma delas tem características específicas quanto a conectividade para seus containers . Podemos consultá-las executando:

```js
docker network ls
```
vamos enternder cada rede!

---
## Bridge

Ao ser iniciado, todo container é associado a uma rede e, caso uma rede não seja especificada explicitamente por nós, ele será associado a rede Bridge .

Todos os containers associados a essa rede poderão se comunicar via protocolo TCP/IP e, se soubermos o IP do container que queremos conectar, podemos enviar tráfego a ele. Porém, os IPs de um container são gerados automaticamente, por isso não é muito útil fazermos a conexão dessa forma, pois sempre que o container for reiniciado, o IP poderá mudar.

---
## Host

Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host , ou seja, da máquina que roda o ambiente Docker . O uso desta rede é recomendada apenas para alguns serviços específicos, normalmente de infra, em que o container precisa desse compartilhamento. Caso contrário, a recomendação é evitá-la.

## None

Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado. Ela é útil quando temos containers que utilizam arquivos para a execução de comandos ou para se comunicar, por exemplo, um container de backup ou que rode apenas um script localmente.

---
## Criando nossa rede

A forma mais recomendada de comunicarmos nossos containers é criando nossa própria rede. Através dela conseguimos, por exemplo, referenciar um container a partir de outro, utilizando seu nome.
