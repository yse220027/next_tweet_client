import { PostUser, User } from "@/app/models/User";
import Cookies from "js-cookie";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

export const registUser = async (postUser: PostUser) => {
    // Development URL: http://localhost:8000/api/regist/store
    const url = LARAVEL_API_URL + "regist/store";
    // APIにアクセス（ユーザ登録）
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postUser),
    })
    if (response.ok) {
        return await response.json();
    }
}

interface Credentisals {
    email: string;
    password: string;
}

export const SignIn = async (credentisals: Credentisals) => {
    // Development URL: http://localhost:8000/api/auth
    const url = LARAVEL_API_URL + "auth";
    console.log(credentisals.email, credentisals.password)

    const response = await fetch(url,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentisals),
        });
    if (response.ok) {
        const data = await response.json();
        Cookies.set("access_token", data?.access_token, { expires: 30 });
        return data;
    }
}

export const getUser = async (accessToken: string) => {
    if (!accessToken) return;
    // Development URL: http://localhost:8000/api/user
    const url = LARAVEL_API_URL + "user";

    const response = await fetch(url,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
}