"use client"

import { useEffect, useState } from "react";
import { User, testUser } from "./models/User";
import { Tweet } from "./models/Tweet";
import { getTweets } from "./services/TweetService";

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
      <textarea className="resize-none w-full h-24 border rounded-md p-2"></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
    </div>
  )
}