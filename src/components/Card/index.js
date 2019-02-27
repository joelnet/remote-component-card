import React from 'react'
import styled from 'styled-components'
import DevTo from '../icons/DevTo'
import Github from '../icons/Github'
import Twitter from '../icons/Twitter'
import gotoUrl from '../lib/gotoUrl'
import ProfileImage from '../ProfileImage'
import Button from './Button'
import Description from './Description'
import Divider from './Divider'
import Head from './Head'
import Name from './Name'
import Tagline from './Tagline'

const Card = styled(
  ({
    className,
    name,
    tagline,
    profileImage,
    profileImage2,
    social,
    description,
    button
  }) => (
    <div className={`${className} profile-card`}>
      <Head>
        <ProfileImage src={profileImage} src2={profileImage2} />
        <div>
          <a href={social.twitter}>
            <Twitter />
          </a>
          <a href={social.devTo}>
            <DevTo />
          </a>
          <a href={social.github}>
            <Github />
          </a>
        </div>
      </Head>
      <Name>{name}</Name>
      <Tagline>{tagline}</Tagline>
      <Divider />
      <Description>{description}</Description>
      <Button onClick={gotoUrl(button.link)}>{button.text}</Button>
    </div>
  )
)`
  /* box shadow */
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.33);

  /* border radius */
  border-radius: 25px 25px 25px 25px;
  -moz-border-radius: 25px 25px 25px 25px;
  -webkit-border-radius: 25px 25px 25px 25px;
  border: 0px solid #000000;

  font-family: Raleway, sans-serif;
  background-color: white;
  color: #808080;
  overflow: hidden;
  width: 300px;
  padding-bottom: 25px;
`

export default Card
