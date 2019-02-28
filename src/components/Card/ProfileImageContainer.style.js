import styled from 'styled-components'

export default styled.div`
  position: relative;

  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;

  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 3px solid #81adf8;

  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;

  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  &:hover {
    transform: rotate(180deg);
  }
`
