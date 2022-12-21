export class Processor {
  static process(data) {
    const innerArray = data.split('\n')
    const rows = []

    innerArray.forEach(row => {
      const array = row.split(',') // Cada array dentro de "line" irá representar uma linha. Quando esse código for executado, estamos separando esses arrays de linha e outros arrays menores separados por vírgula.
      rows.push(array)
    })

    return rows
  }
}
