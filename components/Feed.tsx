import { RefreshIcon } from '@heroicons/react/solid'
import React from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from './TweetComponent'

interface Props {
  tweets: Tweet[]
}
function Feed({ tweets }: Props) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="tex-xl p-5 pb-0 font-bold">Home</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
