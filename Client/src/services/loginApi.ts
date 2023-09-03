import axios from "axios";

export function LoginApi(){
    const url = "http://localhost:9000/login";

    async function login(email:string, password:string) {

        if(email == null || password == null){
            return console.log('one of the email/password was not valid.')
        }
        const { data } = await axios.post(url, {email, password});
        return data;
    }

    return {login}
}