import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 20px;
`

export const Recipes = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextMarvelTitle = styled.Text`
  font-weight: bold;
  font-size: 36px;
  color: #000;
  font-family: 'Roboto-Black';
  text-transform: uppercase;
`

export const SubTitleMarvel = styled.Text`
  font-size: 16px;
  color: #85817e;
  font-family: 'Roboto-Black';
  font-weight: bold;
`

export const RecipeHeroes = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 20px 0;
  background-color: #fff;
`
export const BoxHeroes = styled.View`
  width: 70%;
  height: 50%;
  padding: 0 20px;
  align-items: flex-start;
`

export const MarvelHeroesName = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: 'Roboto-Black';
  font-weight: bold;
`



export const MarvelDescription = styled.Text`
  font-size: 16px;
  color: #85817e;
  line-height: 20px;
  padding: 10px 0 ;
`


export const BoxInformation = styled.View`
  width: 40%;
  height: 50%;
`

export const ImageMarvel = styled.Image`
  height: 180px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const ContainerError = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ViewHeroes = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #000;
`
export const ButtonTextHeroe = styled.Text`
  color: #000;
  font-family: 'Roboto-Medium';
  padding: 10px 0;
`

export const ButtonUniqueHero = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`

export const ImagemHeroeMarvel = styled.Image`
  height: 300px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ContainerUniqueHeroe = styled.View`
  flex: 1;
`
export const RecipeUniqueHeroe = styled.View`
flex: 1;
padding: 20px;
`
export const NameHero = styled.Text`
font-weight: bold;
font-size: 32px;
color: #000;
font-family: 'Roboto-Medium';
`

export const DescriptionHero = styled.Text`
margin-top: 20px;
font-family: 'Roboto-Medium';
font-size: 16px;
line-height: 22px;
color: #85817e;

`
