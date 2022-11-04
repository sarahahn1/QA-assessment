const {shuffleArray} = require('./utils')



describe('shuffleArray should', () => {
    test( 'return a string', () => {
        expect(shuffleArray).toBe('string')
    })
    it('return an array', () => {
        expect(shuffleArray). toBe('array')
    })
})