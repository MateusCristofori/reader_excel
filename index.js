import { Reader } from './Reader.js'
import { Processor } from './Processor.js'
import { Table } from './Table.js'
import { HtmlParser } from './HtmlParser.js'

const leitor = new Reader()

const main = async () => {
  const dados = await leitor.read('./users.csv')
  console.log(dados)
  const dadosProcessados = Processor.process(dados)

  const usuarios = new Table(dadosProcessados)

  const html = await HtmlParser.parser(usuarios)
  console.log(html)
}

main()
