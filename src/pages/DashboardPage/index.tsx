import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  ButtonMarvel,
  ContainerMarvel,
  MarvelComics,
  MarvelText,
  RecipeMarvel,
  TextMarvel
} from './styles'


const DashboardPage: React.FC = () => {
  const navigate = useNavigation()
  return (
    <ContainerMarvel>
      <MarvelText> Marvel </MarvelText>
      <MarvelComics> Comics </MarvelComics>
      <RecipeMarvel>
        <ButtonMarvel onPress={() => navigate.navigate('Marvel')}>
          <TextMarvel> Iniciar </TextMarvel>
        </ButtonMarvel>
      </RecipeMarvel>
    </ContainerMarvel>
  )
}

export default DashboardPage
