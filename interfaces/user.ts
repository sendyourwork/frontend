export interface User {
    isLoggedIn: boolean,
    accessToken: string,
    username: string,
    school_class: string,
    role: 'admin' | 'user'
}