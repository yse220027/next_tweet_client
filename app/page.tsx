"use client"

import { useEffect, useState } from "react";
import { User, testUser } from "./models/User";
import { Tweet, initialTweet } from "./models/Tweet";
import { getTweets, postTweet } from "./services/TweetService";
import TweetForm from "./components/tweet/TweetForm";
import TweetList from "./components/tweet/TweetList";

export default function Home() {
  //テストユーザの取得
  const [user] = useState<User>(testUser);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [tweet, setTweet] = useState<Tweet>(initialTweet);

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

  // Tweetの投稿処理
  const onPostTweet = async (message: string) => {
    const data = await postTweet(user, message);
    setTweet(data);
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