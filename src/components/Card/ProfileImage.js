import styled, { css } from 'styled-components'
import StyledProfileImageContainer from './ProfileImageContainer.style'

export default styled.img`
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
    props.primary
      ? css`
          opacity: 1;
          transform: none;
          ${StyledProfileImageContainer}:hover & {
            opacity: 0;
          }
        `
      : css`
          opacity: 0;
          transform: rotate(180deg);
          ${StyledProfileImageContainer}:hover & {
            opacity: 1;
          }
        `}
`
