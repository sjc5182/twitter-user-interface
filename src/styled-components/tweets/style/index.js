import styled from 'styled-components'

export const Tweets = styled.div`
  height: ${
    props => props.getBackIsTrue ? '100px' : '150px'
  };
  width: auto;
  margin: 0 1px;
  border: 1px solid #e6ecf0;
  background: #ffffff
`

export const TwitterHandle = styled.div`
  width: calc(100% - 100px);
  height: 20px;
  color: #8c9aa5;
  font-size: 15px;
  cursor: pointer
`

export const TwitterName = styled.div`
  width: calc(100% - 100px);
  height: 20px;
  font-weight: 600;
`

export const TwitterHandleWrapper = styled.div`
  width: auto;
  height: 40px;
  
`
export const TwitterText = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
`

export const TweetsContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const TweetsTextContainer = styled.div`
  width: calc(100% - 100px);
  height: auto;
  display: flex;
  flex-direction: column
`
export const ProfileImamge = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%
  }
`


