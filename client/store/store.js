import { proxy } from 'valtio';

export const signupStore = proxy({
    name: '',
    surname: '',
    email: '',
    tel: '',
    password: '',
    position: '',
    experience: ''
})