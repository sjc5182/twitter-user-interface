import React from 'react'
import { Search } from '../styled-components/search/style'

class search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      getText: '',
    }
  }

  handleSearchText = (e) => {
    this.setState({
      getText: e.target.value
    }, () => {
        let filterTweets = this.props.searchTweets.filter(userTweet => {
          let textContents = userTweet.text.toLowerCase()
        return textContents.indexOf(this.state.getText.toLowerCase()) !== -1
      })
      this.props.getSearchContext(filterTweets)
    })
  }

  render(){
    return (
      <Search type="text" value = {this.state.getText} onChange = {this.handleSearchText} placeholder = 'Search Twitter'/>
    )
  }
}

export default search