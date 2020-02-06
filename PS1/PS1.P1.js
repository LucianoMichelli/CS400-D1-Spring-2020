const sortedWord = word => word.replace(/([0-9$-/:-?{-~!"^_`\[\]])/g,'').split('').sort().join('');
console.log(`Sorted word is: ${sortedWord('supercalifragilisticexpialidocious')}`)
console.log(`Sorted word is: ${sortedWord('supe.rcalifragil/istic\expialidociou!s')}`)