import styled from 'styled-components'

export const TwitterContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`
export const MainWrapper = styled.div`
  height: auto;
  width: 50vw;
  @media (max-width: 1000px){
    width: 100%
  }
`

export const SearchWrapper = styled.div`
  height: 40px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TweetsWrapper = styled.div`
  height: 100%;
  width: auto;
  background-color: #e6ecf0;
`
export const Label = styled.label`
  color: #14161a;
  font-weight: bold;
  font-size: 25px;
`
export const Search = styled.input`
  height: 30px;
  width: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: #1ca1f2;
  font-size: 14px;
  border-radius: 20px;
  padding-left: 20px;
`






