function multiTable(number) {
    let table = ""
    for(let i = 1; i <=10; i++) {
      table += `${i} * ${number} = ${i * number}\n`
    }
    return table.trim()
  }