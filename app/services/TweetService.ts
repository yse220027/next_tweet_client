import { User } from "@/app/models/User";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

// 投稿一覧データ取得
export const getTweets = async (accessToken: string) => {
    // Development URL: http://localhost:8000/api/tweet/get
    const url = LARAVEL_API_URL + "tweet/get"
    // APIサーバにアクセス
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        return await response.json();
    }
}