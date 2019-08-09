import React from 'react';
import { TwitterContainer, MainWrapper, SearchWrapper, TweetsWrapper, Label } from './style'
import Search from './components/search'
import Tweets from './components/tweets'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      getTweets: [],
      searchTweets: [],
      tweetHandle: '',
      isBack: false
    }
  }

  componentDidMount(){
    this.callBackendAPI()
      .then(res => this.setState(()=>{
        return{
          getTweets: [...res],
          searchTweets: [...res]
        }
      }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () =>{
    const response = await fetch('/handle');
    const body = await response.json();
    if(response.status !== 200){
      throw Error(body.message)
    }
    return body
  }

  // setState's second param takes callback, this method allow setState to happen before calling findUsertweets function which require the tweethandle string
  getUserHandle = (e) => {
    const HandleId = e.target.innerHTML
    this.setState({
      tweetHandle: HandleId
    }, () => {
      this.findUsertweets()
    })
  }

  findUsertweets = async () => {
    const setting = {
      headers: {
        "Content-type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.tweetHandle
      })
    }

    const data = await fetch('http://localhost:5000/usertweets', setting)
      .then(response => {
        const body = response.json()
        if(response.status !== 200){
          throw Error(body.message)
        }
        return body
      })
      .then(json => {
        this.setState({
          getTweets: [...json],
          searchTweets: [...json],
          isBack: true
        })
      })
      .catch(err => {
        return err
      })
      return data
  }

  handleBackButton = () => {
    this.callBackendAPI()
      .then(res => this.setState(()=>{
        return{
          getTweets: [...res],
          searchTweets: [...res],
          isBack: false
        }
      }))
      .catch(err => console.log(err));
  }

  handleSearchResult = (filterResult) => {
    this.setState({
      getTweets: [...filterResult]
    })
  }

  render(){
    const { getTweets, isBack, searchTweets } = this.state
    console.log(this.state.getTweets)
    return(
      <TwitterContainer>
        <MainWrapper >
          <SearchWrapper>
            {
            isBack ? 
              (
                <div onClick = { this.handleBackButton }>
                  <i className="fas fa-arrow-left fa-2x" style={{color:'#1ca1f2', cursor: 'pointer'}} />
                </div>
              ): null
            }
            <Label>Tweet</Label>
            <Search searchTweets = { searchTweets } getSearchContext = {this.handleSearchResult} />
          </SearchWrapper>
          <TweetsWrapper>
            <Tweets getData = { getTweets } getBackIsTrue = {isBack} getUserHandle = { this.getUserHandle } />
          </TweetsWrapper>
        </MainWrapper>
      </TwitterContainer>
    )
  }
}
export default App;
