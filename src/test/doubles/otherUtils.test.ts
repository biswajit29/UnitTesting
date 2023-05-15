import { calculateComplexity, convertToUpperCaseCB } from "../../app/doubles/otherUtils"

describe('OtherUtils test suite',()=>{
it('Calculates complexity', ()=>{
    const expected = {
        length: 5,
        extraInfo: {
            field1: "field1",
            field2: "field2",
        }
    }
    const sut = calculateComplexity;
    const actual = sut(expected as any)
    expect(actual).toBe(10)
    })
it('convertToUpperCaseCB calls with an invalid argument', ()=>{
    const actual = convertToUpperCaseCB('',()=>{})
    expect(actual).toBeUndefined()
})
it('convertToUpperCaseCB calls with an valid argument', ()=>{
    const actual = convertToUpperCaseCB('abcD',()=>{})
    expect(actual).toEqual('ABCD')
})

describe.only('tracking callbacks',()=>{

    let timesCalled = 0;
    let cbArgs = [];

    function callbackMock(args: string){
        timesCalled++;
        cbArgs.push(args)
    }
    afterEach(()=>{
        timesCalled = 0;
        cbArgs = [];
    });

    it('convertToUpperCaseCB calls with an invalid argument - tracking callbacks', ()=>{
        const actual = convertToUpperCaseCB('',callbackMock)
        expect(actual).toBeUndefined()
        expect(timesCalled).toBe(1);
        expect(cbArgs).toContain('Invalid Argument')

    })
    it('convertToUpperCaseCB calls with an valid argument - tracking callbacks', ()=>{
        const actual = convertToUpperCaseCB('ABcde',callbackMock)
        expect(actual).toBe('ABCDE')
        expect(timesCalled).toBe(1);
        expect(cbArgs).toContain(`Passed Argument is ABcde`);
    })
})

})