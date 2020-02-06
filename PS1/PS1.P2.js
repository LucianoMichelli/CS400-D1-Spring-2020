const evaluate = ([left, op, right]) => {
    left = parseInt(left);
    right = parseInt(right);
    switch (op) {
        case '+':
            return left + right;
            break;
        case '-':
            return left - right;
            break;
        case '*':
            return left * right;
            break;
        case '/':
            return left / right;
            break;
    }
}
let expressions = ['4+2', '5*7', '6-1', '9/2'];
for (const expression of expressions) {
    console.log(evaluate(expression.split('')));
}
