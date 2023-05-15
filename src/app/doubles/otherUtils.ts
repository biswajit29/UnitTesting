export type StringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

type LoggerServiceCallBack = (args: string) => void

export function calculateComplexity(inputString:StringInfo): number{
    return Object.keys(inputString.extraInfo).length * inputString.length;
} 

export function convertToUpperCaseCB(inputString:string, callback: LoggerServiceCallBack){
    if(!inputString){
        callback('Invalid Argument');
        return;
    }
    callback(`Passed Argument is ${inputString}`);
    return inputString.toUpperCase()
} 
