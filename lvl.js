function summacuba(params1) {
    let summa = 0
    for(let x of params1){
        console.log("1)", x ** 3);
        summa += x ** 3
    }
    return summa
}

console.log("1)", summacuba([34, 35, 55]))

console.log('        ');
console.log('---------');
console.log('        ');

function sortirovkabukv(params2) {
    return params2.sort((a, b) => a.length - b.length)
}

console.log("2)", sortirovkabukv(['aaaaa', 'b', 'cccc', 'ddd']))

console.log('        ');
console.log('---------');
console.log('        ');

function nomerao(params3) {
    let newarr = String(params3).split('')
    console.log("3)", newarr)
    newarr = newarr.map(item => +item)
    return Math.max(...newarr)
}

console.log("3)", nomerao(345));

console.log('        ');
console.log('---------');
console.log('        ');

function getOnlyEvens(params4) {
    return params4.filter(item => item > 5)
}

console.log("4)", getOnlyEvens([1, 2, 3, 4, 5, 6]));

console.log('        ');
console.log('---------');
console.log('        ');

let qlasniyebukvi = ['a', 'e', 'u', 'o', 'i']

function countVowels(params5) {
    let newarr1 = params5.split('')
    return newarr1.filter(item => qlasniyebukvi.includes(item)).length
}

console.log("5)", countVowels(['Azizagaguliyev']));