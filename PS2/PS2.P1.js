
// Used the fibs() function from lecture slides
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}

function* evenFib () {
    let fibNum = fibs();
    while (true) {
        let fib = fibNum.next().value;
        if (fib % 2 == 0) {
            count--;
            yield fib
        }
    }
}

myFibs = evenFib();
let count = 6;
while (count != 0) {
    console.log(myFibs.next().value)
}