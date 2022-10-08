function expressionMatter(a, b, c) {
    const op1 = a * (b + c)
    const op2 = a * b * c
    const op3 = a + b * c
    const op4 = (a + b) * c
    const op5 = a + b + c
    return Math.max(op1, op2, op3, op4, op5)  
  }