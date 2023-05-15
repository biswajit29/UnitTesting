import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils"

describe('Utils test suite', ()=>{

    describe('StringUtils tests',()=>{
        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
        })
        afterEach(()=>{
        });
        it('should return correct upperCase', ()=>{
            const actual = sut.toUpperCase('abc');
            expect(actual).toBe('ABC')
        })
        it('should throw an invalid argument - function', ()=>{
            // Note: to test for error wrap the call that will throw an error in a function and then test that function
            function expectError(){const actual = sut.toUpperCase('');}
            
            expect(expectError).toThrow()
            expect(expectError).toThrowError('Invalid Argument')
        })
        it('should throw an invalid argument - arrow function', ()=>{
            expect(()=>{
                sut.toUpperCase('');
            }).toThrowError('Invalid Argument')
        })

        it('should throw an invalid argument - try catch block', (done)=>{
            try{
                //Notes: if this doesn't throw an error then it will still pass
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!')
            }
            catch(error){
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid Argument')
                //Notes: need to tell jest that it is done and we can't pass arguments in here else it wil timeout
                done();
            }
        })

        it.todo('Testing for long strings')
    })

    it('should return uppercase of a string', ()=>{
        //arrange
        const sut = toUpperCase;
        const expected = 'ABC';
        //act
        const actual = sut('abc');
        //assert
        expect(actual).toBe(expected);
    })
})

describe("getStringInfo for arg My-String should",()=>{
    test("return right length", ()=>{
        const sut = getStringInfo;
        const actual = sut('My-String')
        expect(actual.characters).toHaveLength(9);
        expect(actual.length).toBe(9);
    })
    test("return right lower case", ()=>{
        const sut = getStringInfo;
        const actual = sut('My-String')
        expect(actual.lowerCase).toBe('my-string');
        expect(actual.lowerCase).toBe('my-string');
    })
    test("return right upper case", ()=>{
        const sut = getStringInfo;
        const actual = sut('My-String')
        expect(actual.upperCase).toBe('MY-STRING');        
    })
    test("return right character", ()=>{
        const sut = getStringInfo;
        const actual = sut('My-String')
        expect(actual.characters).toContain<string>('M')
    })
    test("return right extrainfo", ()=>{
        const sut = getStringInfo;
        const actual = sut('My-String')
        expect(actual.extraInfo).toEqual({});
        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
    })
})
//Notes: Parameterized tests example : 
// This avoid duplication of calling the test or it method multiple times 
// for multiple use cases by passing an object and then iterating over it in the tests.
describe("ToUpperCase example with each", ()=>{
    it.each([
        {input:'abc', expected: 'ABC'},
        {input:'def', expected: 'DEF'},
        {input:'my-string', expected: 'MY-STRING'},
    ])('$input toUpperCase should be $expected',({input, expected})=>{
        const sut = toUpperCase;
        const actual = sut(input);
        expect(actual).toBe(expected);
    })
})