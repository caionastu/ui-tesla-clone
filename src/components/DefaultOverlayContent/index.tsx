
import React from 'react'
import { SectionInformation } from '../Page'
import { Container, Heading, Buttons } from './styles'

interface Props {
  sectionInformation: SectionInformation
}

const DefaultOverlayContent: React.FC<Props> = ({ sectionInformation }) => {
  return (
    <Container>
      <Heading>
        <h1>{sectionInformation.title}</h1>
        <h2>{sectionInformation.subTitle}</h2>
      </Heading>

      <Buttons>
        <button>{sectionInformation.buttons.primary.description}</button>
        {
          sectionInformation.buttons.secondary
            ? <button className='white'>{sectionInformation.buttons.secondary.description}</button>
            : null
        }
      </Buttons>
    </Container>
  )
}

export default DefaultOverlayContent
