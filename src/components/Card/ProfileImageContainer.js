import React from 'react'
import ProfileImage from './ProfileImage'
import StyledProfileImageContainer from './ProfileImageContainer.style'
import propTypes from 'prop-types'

const ProfileImageContainer = ({ src, src2 }) => (
  <StyledProfileImageContainer>
    <ProfileImage src={src2} className="secondary" secondary />
    <ProfileImage src={src} className="primary" primary />
  </StyledProfileImageContainer>
)

ProfileImageContainer.propTypes = {
  src: propTypes.string.isRequired,
  src2: propTypes.string
}

export default ProfileImageContainer
