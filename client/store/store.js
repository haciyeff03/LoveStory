import { proxy } from 'valtio';

export const signupStore = proxy({
    name: '',
    surname: '',
    email: '',
    tel: '',
    password: '',
    pwagain: '',
    position: '',
    experience: ''
})

export const loginStore = proxy({
     email: '',
    password: '',
   
})