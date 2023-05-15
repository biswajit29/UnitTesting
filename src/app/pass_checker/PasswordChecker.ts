
export enum PasswordErrors{
    SHORT='Password is too short',
    NO_UPPER_CASE='No Upper case letter is present',
    NO_LOWER_CASE='No Lower case letter is present',
    NO_NUMBER_PRESENT='At least one number is required for Admin passwords'
} 
export interface CheckResults{
    valid: boolean,
    reasons: PasswordErrors[]
}
export class PasswordChecker {
    
    public passwordChecker(arg:string):CheckResults{
        const reasons:PasswordErrors[] = [];
        this.checkForPasswordLengths(arg,reasons);
        this.checkForContainingUpperCharacters(arg,reasons);
        this.checkForContainingLowerCharacters(arg,reasons);
        return {
            valid: reasons.length>0?false:true,
            reasons: reasons
        };
    }

    public checkAdminPasswords(arg:string):CheckResults{
        const basicChecks = this.passwordChecker(arg);
        this.checkForNumbers(arg,basicChecks.reasons)
        return {
            valid: basicChecks.reasons.length>0?false:true,
            reasons: basicChecks.reasons
        };
    }

    private checkForNumbers(arg: string, reasons: PasswordErrors[] ){
        const hasNumber = /\d/;
        if(!hasNumber.test(arg))
            reasons.push(PasswordErrors.NO_NUMBER_PRESENT)
    }
    private checkForPasswordLengths(arg: string, reasons: PasswordErrors[] ){
        if(arg.length<8)
            reasons.push(PasswordErrors.SHORT)
    }
    private checkForContainingUpperCharacters(arg: string, reasons: PasswordErrors[] ){
        if(arg.toLowerCase() === arg)
            reasons.push(PasswordErrors.NO_UPPER_CASE)
    }
    private checkForContainingLowerCharacters(arg: string, reasons: PasswordErrors[] ){
        if(arg.toUpperCase() === arg)
            reasons.push(PasswordErrors.NO_LOWER_CASE)
    }
}