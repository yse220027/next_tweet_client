"use client"

import { useEffect, useState, } from 'react';
import TweetDetail from '@/app/components/tweet/TweetDetail';
import { Tweet } from '@/app/models/Tweet';

interface TweetListProps {
    tweets: Tweet[];
}

const TweetList = ({ tweets }: TweetListProps) => {

    return (
        <div>
            {
                tweets?.map((tweet) => (
                    <TweetDetail key={tweet.id} tweet={tweet} />
                ))
            }
        </div>
    );
}

export default TweetList;