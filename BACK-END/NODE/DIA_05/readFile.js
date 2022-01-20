// Como criar middleware que ler arquivo do sistema de maniera correta

const fs = require('fs').promises;
const path = require('path');

module.exports = async (req, res, next) => {
  // esse path.join com o parametro __dirname (o dirname representa o nome do diretório atual em que esse middleware está) serve para separa o caminho do arquivo entre virgulas e dessa forma poder ser lido em qualquer S.O e também pelos testes mesmo que o teste esteja rodando a partir de outro diretório. Basicamente o dirname e o caminho separado por virgula diz ao teste "a partir do diretorio em que esse middleware está (dirname), volte uma pasta (..) e acesse o arquivo (file.json"

  const nameFile = await fs
    .readFile(path.join(__dirname, '..', 'file.json'), 'utf8')
    .then(JSON.parse);
  
  res.status(200).json(nameFile);

}