let countDownFrom = (num) => {
    if(num === 0) return
    console.log(num)
    countDownFrom(num-1)
}
countDownFrom(10)

// 
// let categories = [
//     { id: 'animals', 'parent': null},
//     { id: 'mammals', 'parent': 'animals'},
//     { id: 'animals', 'parent': 'mammals'},
//     { id: 'animals', 'parent': 'mammals'},
//     { id: 'chi', 'parent': 'dog'},
//     { id: 'animals', 'parent': 'dog'},
//     { id: 'animals', 'parent': 'cat'},
//     { id: 'animals', 'parent': 'cat'},
// ]
//
// let makeTree = (categories, parent) => {
//     let node = {}
//     categories
//     .filter(c => c.parent === parent)
//     .forEach(c => node[c.id] =
//     makeTree(categories, c.id))
//     return node
// }
// console.log(makeTree(categories, null))
