"use client"

import { useEffect, useState } from "react";
import { User, initialUser, testUser } from "./models/User";
import { Tweet, initialTweet } from "./models/Tweet";
import { getTweets, postTweet } from "./services/TweetService";
import TweetForm from "./components/tweet/TweetForm";
import TweetList from "./components/tweet/TweetList";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getUser } from "./services/UserService";
import { init } from "next/dist/compiled/webpack/webpack";

export default function Home() {
  const router = useRouter();

  //テストユーザの取得
  const [user, setUser] = useState<User>(initialUser);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const token = Cookies.get('access_token') || "";

  useEffect(() => {
    (async () => {
      const authUser = await getUser(token);
      authUser.accessToken = token;
      if (authUser?.id > 0) {
        console.log(authUser)
        setUser(authUser);
      } else {
        router.replace('auth/login');
      }
    })();
  }, [router, token])

  useEffect(() => {
    (async () => {
      console.log(user)
      if (user?.accessToken && user?.id > 0) {
        //APIからTweetデータ取得
        const data = await getTweets(user.accessToken);
        console.log(data)
        //データ設定
        setTweets(data);
      }
    })();
  }, [user])

  // Tweetの投稿処理
  const onPostTweet = async (message: string) => {
    const newTweet = await postTweet(user, message) as Tweet;
    console.log(newTweet);
    // 新しい投稿があれば、現在の投稿一覧に追加
    newTweet?.id && setTweets(currentTweets => [newTweet, ...currentTweets]);
  }

  return (
    <div>
      {
        user?.id > 0 && (
          <>
            <TweetForm onPostTweet={onPostTweet} />
            <TweetList tweets={tweets} />
          </>
        )
      }
    </div>
  )
}