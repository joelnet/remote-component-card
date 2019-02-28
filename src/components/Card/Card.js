import propTypes from 'prop-types'
import React from 'react'
import DevTo from '../icons/DevTo'
import Github from '../icons/Github'
import Twitter from '../icons/Twitter'
import gotoUrl from '../lib/gotoUrl'
import Button from './Button'
import { StyledCard } from './Card.style'
import Description from './Description'
import Divider from './Divider'
import Head from './Head'
import Name from './Name'
import ProfileImageContainer from './ProfileImageContainer'
import Tagline from './Tagline'

const Card = ({
  name,
  tagline,
  profileImage,
  profileImage2,
  twitter,
  devTo,
  github,
  description,
  buttonLink,
  buttonText
}) => (
  <StyledCard className="profile-card">
    <Head>
      <ProfileImageContainer src={profileImage} src2={profileImage2} />
      <div>
        {twitter && (
          <a href={twitter}>
            <Twitter />
          </a>
        )}
        {devTo && (
          <a href={devTo}>
            <DevTo />
          </a>
        )}
        {github && (
          <a href={github}>
            <Github />
          </a>
        )}
      </div>
    </Head>
    <Name>{name}</Name>
    {tagline && <Tagline>{tagline}</Tagline>}
    <Divider />
    <Description>{description}</Description>
    <Button onClick={gotoUrl(buttonLink)}>{buttonText}</Button>
  </StyledCard>
)

Card.propTypes = {
  name: propTypes.string.isRequired,
  tagline: propTypes.string,
  profileImage: propTypes.string.isRequired,
  profileImage2: propTypes.string,
  twitter: propTypes.string,
  devTo: propTypes.string,
  github: propTypes.string,
  description: propTypes.string,
  buttonLink: propTypes.string,
  buttonText: propTypes.string
}

export default Card
