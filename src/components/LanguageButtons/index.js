import {LanguageButton, LanguageButtonCard} from './styledComponents'

const LanguageButtons = props => {
  const {languageDetails, onChangeLanguage, isActive} = props
  const {buttonText} = languageDetails

  const onClickLanguage = () => {
    onChangeLanguage(languageDetails)
  }

  return (
    <LanguageButtonCard>
      <LanguageButton
        type="button"
        onClick={onClickLanguage}
        isActive={isActive}
      >
        {buttonText}
      </LanguageButton>
    </LanguageButtonCard>
  )
}

export default LanguageButtons
