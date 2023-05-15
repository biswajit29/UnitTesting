export class StringUtils {
    public toUpperCase(arg: string){
        if(!arg)
            throw new Error("Invalid Argument")
        return toUpperCase(arg);
    }
}

export function toUpperCase(arg: string){
    return arg.toUpperCase();
}

export type StringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}
//Notes: In order to ignore a part from the coverage report use the below
// /* istanbul ignore next */
export function getStringInfo(arg: string): StringInfo{
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    }
}