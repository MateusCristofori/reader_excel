import { Reader } from './Reader.js'
import { Processor } from './Processor.js'
import { Table } from './Table.js'
import { HtmlParser } from './HtmlParser.js'
import { Writer } from './Writer.js'

const leitor = new Reader()
const writer = new Writer()

const main = async () => {
  const dados = await leitor.read('./users.csv')
  console.log(dados)
  const dadosProcessados = Processor.process(dados)

  const usuarios = new Table(dadosProcessados)

  const html = await HtmlParser.parser(usuarios)

  writer.write(`${Date.now}.html`, html)
}

main()
