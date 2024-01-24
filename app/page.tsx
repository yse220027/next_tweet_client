"use client"

import { useEffect, useState } from "react";
import { User, testUser } from "./models/User";
import { Tweet } from "./models/Tweet";
import { getTweets } from "./services/TweetService";
import TweetForm from "./components/tweet/TweetForm";
import TweetList from "./components/tweet/TweetList";

export default function Home() {
  //テストユーザの取得
  const [user] = useState<User>(testUser);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    (async () => {
      if (user?.accessToken) {
        //APIからTweetデータ取得
        const data = await getTweets(user.accessToken);
        console.log(data)
        //データ設定
        setTweets(data);
      }
    })();
  }, [user])

  return (
    <div>
      {
        user?.id > 0 && (
          <>
            <TweetForm />
            <TweetList tweets={tweets} />
          </>
        )
      }
    </div>
  )
}