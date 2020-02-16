function* splitSentence(sentence) {
    yield* sentence.split(' ')
}
let sentence ="All I know is something like a bird within her sang";
let count = (sentence.match(/ /g) || []).length;
let split = splitSentence(sentence);
while (count --> 0) {
    console.log(split.next().value);
}