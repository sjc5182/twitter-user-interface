import React from 'react'
import { Followers, FollowersCount, AccountDate } from '../styled-components/followers/style'
const followers = (props) =>
  <Followers>
    <FollowersCount>
      <span style = {{color: 'black'}}>
        {props.userInfo.followers_count}
      </span>
      <span>
        {` FOLLOWERS`} 
      </span>
    </FollowersCount>
    <AccountDate>
      <i className="fas fa-calendar-alt"></i>
      <span>
        {` Joined `}
      </span>
      <span>{props.userInfo.created_at.slice(0, 10)}</span>
    </AccountDate>
  </Followers>

export default followers