import pdf from 'html-pdf'

export class PDFWriter {
  static writePDF(fileName, html) {
    pdf.create(html, {}).toFile(fileName, (err) => {})
  }
}
