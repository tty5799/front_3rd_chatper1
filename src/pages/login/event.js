import {Store} from "../../utils/store.js";

export const addLoginFormEvent = (router) => {
    const store = new Store()
    const form = document.getElementById('login-form')

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const email = formData.get('email');

        if(!email) return alert('이메일을 입력해 주세요.')

        localStorage.setItem('user', JSON.stringify({name: email, email: '', bio: '',}));
        localStorage.setItem('isLogin','true')
        store.setState({isLogin:true, username:email})
        router.navigateTo('/profile')
    });
}

export const getUserInfoFromStorage = () => {
    let userInfo

    try{
       userInfo = JSON.parse(localStorage.getItem('user'))
    } catch (e) {
        alert('예기치 못한 오류가 발생했습니다.')
        localStorage.removeItem('user')
    }

    return userInfo
}