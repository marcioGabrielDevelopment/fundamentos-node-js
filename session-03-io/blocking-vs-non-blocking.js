const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const { join } = require("path");

const sourcePath = join(__dirname, "files", "examples.txt");
const destPath = join(__dirname, "files", "example.copy.blocking.txt");

const copyFileBlocking = (source, dest) => {
  console.log("Lendo Blocking Conteudo");
  const content = readFileSync(source);
  console.log("Escrevendo blocking conteudo");
  writeFileSync(dest,content);
};

copyFileBlocking(sourcePath, destPath);
console.log("Copia Blocking com Sucesso!!");


const copyFileNonBlocking = (source, dest) => {
  console.log('Começou a copiar non-blocking')
  readFile(source, (_err, data) => {
    console.log('Terminou de ler non-blocking')
    writeFile(dest,data, (_err) => {
      console.log('Terminou de escrever non-blocking')
    })
  })
}


const destPathNonBlockinf = join(__dirname, "files", "example.copy.non-blocking.txt");

copyFileNonBlocking(sourcePath,destPathNonBlockinf);
console.log('Terminou Mesmo ?')