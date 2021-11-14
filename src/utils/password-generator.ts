export const passwordGenerator = (
    length: number,
    useSymbols: boolean,
    useNumbers: boolean,
    useUpperCaseLetters: boolean,
    useLowerCaseLetters: boolean,
): string => {

    const symbols = '!@$%^&*()';
    const numbers = '123456789';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let chars = ''
    let password = ''

    chars += useSymbols ? symbols : '';
    chars += useNumbers ? numbers : '';
    chars += useLowerCaseLetters ? lowerCaseLetters : '';
    chars += useUpperCaseLetters ? upperCaseLetters : '';


    for (let i = 0; i <= length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }

    return password;
}