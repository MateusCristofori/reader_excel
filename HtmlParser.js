import ejs from 'ejs'

export class HtmlParser {
  static async parser(table) {
    return await ejs.renderFile('./table.ejs', {
      header: table.header,
      rows: table.rows
    })
  }
}
