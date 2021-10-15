export default function loginWithNameAndPassword(email: string, password: string, name?: string, schoolNr?: string) {
    typeof name === undefined && typeof schoolNr === undefined ? console.log(`sent to backend data: email: ${email}, password: ${password}, name: ${name}, schoolNr: ${schoolNr}`) : console.log(`sent to backend data: email: ${email}, password: ${password}`);
}