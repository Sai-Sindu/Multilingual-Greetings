import {Component} from 'react'

import LanguageButtons from '../LanguageButtons'
import {
  MultilingualGreetingsContainer,
  Title,
  LanguageButtonsCard,
  LanguageImg,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeLanguageGreetingsId: languageGreetingsList[0].id,
    activeLanguage: languageGreetingsList[0],
  }

  onChangeLanguage = languageDetails => {
    this.setState({
      activeLanguageGreetingsId: languageDetails.id,
      activeLanguage: languageDetails,
    })
  }

  render() {
    const {activeLanguageGreetingsId, activeLanguage} = this.state
    const {imageUrl, imageAltText} = activeLanguage
    return (
      <MultilingualGreetingsContainer>
        <Title>Multilingual Greetings</Title>
        <LanguageButtonsCard>
          {languageGreetingsList.map(eachLanguage => (
            <LanguageButtons
              languageDetails={eachLanguage}
              key={eachLanguage.id}
              onChangeLanguage={this.onChangeLanguage}
              isActive={eachLanguage.id === activeLanguageGreetingsId}
            />
          ))}
        </LanguageButtonsCard>
        <LanguageImg src={imageUrl} alt={imageAltText} />
      </MultilingualGreetingsContainer>
    )
  }
}

export default MultilingualGreetings
