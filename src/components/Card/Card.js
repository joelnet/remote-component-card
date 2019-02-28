import React from 'react'
import DevTo from '../icons/DevTo'
import Github from '../icons/Github'
import Twitter from '../icons/Twitter'
import gotoUrl from '../lib/gotoUrl'
import ProfileImage from '../ProfileImage'
import Button from './Button'
import { CardStyle } from './Card.style'
import Description from './Description'
import Divider from './Divider'
import Head from './Head'
import Name from './Name'
import Tagline from './Tagline'

const Card = CardStyle(
  ({
    className,
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
    <div className={`${className} profile-card`}>
      <Head>
        <ProfileImage src={profileImage} src2={profileImage2} />
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
      <Tagline>{tagline}</Tagline>
      <Divider />
      <Description>{description}</Description>
      <Button onClick={gotoUrl(buttonLink)}>{buttonText}</Button>
    </div>
  )
)

export default Card
