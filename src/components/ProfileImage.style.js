import styled, { css } from 'styled-components'

export const profileImageStyle = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;

  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  ${props =>
    props.className === 'secondary' &&
    css`
      transform: rotate(180deg);
    `}
`

export const profileImageContainerStyle = Component => styled(Component)`
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

  img.primary {
    opacity: 1;
  }
  img.secondary {
    opacity: 0;
  }

  &:hover {
    transform: rotate(180deg);
    img.primary {
      opacity: 0;
    }
    img.secondary {
      opacity: 1;
    }
  }
`
