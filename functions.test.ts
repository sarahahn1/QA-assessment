const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4,5]
const testArr2 = []
const testArr3 = ['hello', 'world']
const testArr4 = [{'name':'sarah'}]



describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr4))).toBe(true)
    })

test('return array same length as input', () => {
    expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
    expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
    expect(shuffleArray(testArr3)).toHaveLength(testArr3.length)
    expect(shuffleArray(testArr4)).toHaveLength(testArr4.length)
})

})