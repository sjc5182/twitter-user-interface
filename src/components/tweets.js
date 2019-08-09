import React from 'react'
import { Tweets, ProfileImamge, TweetsContentWrapper, TweetsTextContainer, TwitterHandle, TwitterText, TwitterHandleWrapper, TwitterName } from '../styled-components/tweets/style'
import Followers from './followers'
const tweets = (props) => 
  props.getData.map(tweetContent => {
    return (
      <Tweets key = { tweetContent.id } getBackIsTrue = {props.getBackIsTrue}>
        <TweetsContentWrapper>
          <ProfileImamge>
            <img src = {tweetContent.user.profile_image_url} alt = "profile"/>
          </ProfileImamge>
          <TweetsTextContainer>
            <TwitterHandleWrapper>
              <TwitterName>
                {tweetContent.user.name}
              </TwitterName>
              <TwitterHandle onClick = {props.getUserHandle}>
                {`@${tweetContent.user.screen_name}`}
              </TwitterHandle>
            </TwitterHandleWrapper>
            <TwitterText>
              <small>{tweetContent.text}</small>
              {
                props.getBackIsTrue ? null
                  : (<Followers userInfo = {tweetContent.user}/>)
              }
            </TwitterText>
          </TweetsTextContainer>
        </TweetsContentWrapper>
      </Tweets>
    )
  })
export default tweets