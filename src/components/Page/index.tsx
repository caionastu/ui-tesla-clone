
import React from 'react'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelSection, ModelsWrapper } from '../Model'
import UniqueOverlay from '../UniqueOverlay'
import { Container, Spacer } from './styles'

export interface SectionInformation {
  title: string,
  subTitle: string,
  buttons: SectionButton,
}

export interface SectionButton {
  primary: Button,
  secondary?: Button
}

export interface Button {
  description: string
}

const Page: React.FC = () => {
  const sectionsInformation: SectionInformation[] = [
    {
      title: 'Model One',
      subTitle: 'Order Online for Delivery',
      buttons: { primary: { description: 'Custom Ordem' }, secondary: { description: 'Existing Inventory' } }
    },
    {
      title: 'Solar Roof',
      subTitle: 'Produce Clean Energy From Your Roof',
      buttons:
        { primary: { description: 'Custom Ordem' } }
    },
    {
      title: 'Model 3',
      subTitle: 'Order Online for Delivery',
      buttons:
        { primary: { description: 'Custom Ordem' }, secondary: { description: 'Existing Inventory' } }
    },
    {
      title: 'Model S',
      subTitle: 'Order Online for Delivery',
      buttons:
        { primary: { description: 'Custom Ordem' }, secondary: { description: 'Existing Inventory' } }
    },
    {
      title: 'Model Y',
      subTitle: 'Order Online for Delivery',
      buttons:
        { primary: { description: 'Custom Ordem' }, secondary: { description: 'Existing Inventory' } }
    },
    {
      title: 'Model X',
      subTitle: 'Order Online for Delivery',
      buttons:
        { primary: { description: 'Custom Ordem' }, secondary: { description: 'Existing Inventory' } }
    },
    {
      title: 'Solar Panel',
      subTitle: 'Lowest Cost Solar Panels in America',
      buttons:
        { primary: { description: 'Custom Ordem' } }
    }
  ]

  return (
    <Container>
      <ModelsWrapper>

        <div>
          {sectionsInformation.map(sectionInformation => (
            <ModelSection
              key={sectionInformation.title}
              className='colored'
              modelName={sectionInformation.title}
              overlayNode={
                <DefaultOverlayContent
                  sectionInformation={sectionInformation}
                />
            }
          />
          ))}
        </div>

        <Spacer/>
        <UniqueOverlay/>

      </ModelsWrapper>
    </Container>
  )
}

export default Page
