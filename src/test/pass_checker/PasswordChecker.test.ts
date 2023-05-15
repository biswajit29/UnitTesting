import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"

describe('Password Checker Test Suite', ()=>{
    let sut:PasswordChecker;
    beforeEach(()=>{
        sut = new PasswordChecker()
    })
    it('Password with less then 8 characters are invalid', ()=>{
        const actual = sut.passwordChecker('12345')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })
    it('Password with more than or equal to 8 characters are valid', ()=>{
        const actual = sut.passwordChecker('123456789')
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    })
    it('Password with no uppercase is invalid', ()=>{
        const actual = sut.passwordChecker('acpwdbd')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })
    it('Password with one uppercase is valid', ()=>{
        const actual = sut.passwordChecker('12345AB')
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    })
    it('Password with no lowercase is invalid', ()=>{
        const actual = sut.passwordChecker('123456ABC')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })
    it('Password with one lowercase is valid', ()=>{
        const actual = sut.passwordChecker('12bba')
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE)
    })
    it('Complex Password is valid', ()=>{
        const actual = sut.passwordChecker('123456aBC')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).toHaveLength(0)
    })

    it('Admin Passwords with no Number is invalid', ()=>{
        const actual = sut.checkAdminPasswords('bHaBC')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER_PRESENT)
    })
    it('Admin Passwords with number is valid', ()=>{
        const actual = sut.checkAdminPasswords('87bHaBC')
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER_PRESENT)
    })
})