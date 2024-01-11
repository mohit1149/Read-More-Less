// Write your code here
import {useState} from 'react'
import {
  MainHeading,
  MainParagraph,
  ParagraphDescription,
  MainBgContainer,
  MainButton,
  MainImage,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isActive, setActive] = useState(false)
  const textShow = isActive
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const textButton = isActive ? 'Read Less' : 'Read More'
  const onClickButton = () => {
    setActive(prevState => !prevState)
  }
  return (
    <MainBgContainer>
      <MainHeading>React Hooks</MainHeading>
      <MainParagraph>Hooks are a new addition to React</MainParagraph>
      <MainImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ParagraphDescription>{textShow}</ParagraphDescription>
      <MainButton type="button" onClick={onClickButton}>
        {textButton}
      </MainButton>
    </MainBgContainer>
  )
}

export default ReadMore
