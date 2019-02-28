import React from 'react'
import styled from 'styled-components'
import {
  profileImageContainerStyle,
  profileImageStyle
} from './ProfileImage.style'

const ProfileImage = styled.img([profileImageStyle])

const ProfileImageContainer = profileImageContainerStyle(
  ({ className, src, src2 }) => (
    <div className={className}>
      <ProfileImage src={src2} className="secondary" />
      <ProfileImage src={src} className="primary" />
    </div>
  )
)

export default ProfileImageContainer
