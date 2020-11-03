import Lottie from 'lottie-react-native';
import md5 from 'md5';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../../animations/loading.json';
import api from '../../services';
import {
  BoxHeroes,
  BoxInformation,

  ButtonTextHeroe,
  ButtonUniqueHero,
  Container,
  ContainerError,
  ContainerUniqueHeroe,
  DescriptionHero,
  ImageMarvel,
  ImagemHeroeMarvel,
  MarvelDescription,
  MarvelHeroesName,
  NameHero,
  RecipeHeroes,
  Recipes,
  RecipeUniqueHeroe,
  SubTitleMarvel,
  TextMarvelTitle,
  ViewHeroes
} from './styles';

interface ComicsHeroes {
  id: string
  name: string
  description: string
  thumbnail: {
    path: any
    extension: string
  }
}

interface ComicsList {
  results: ComicsHeroes[]
}

const ListMarvelPage: React.FC = () => {
  const [heroe, setHeroe] = useState<any>()
  const [item, setItem] = useState<ComicsHeroes>()
  const [datas, setDatas] = useState<ComicsList>()
  const [loading, setLoading] = useState<any>(true)
  const modalizeRef = useRef<Modalize>(null)
  const API_PUBLIC_KEY = '7b5828e344385e62705572abdac040d5'
  const API_PRIVATE_KEY = '946ea3da60848ec1e6b9c0da99c36284aa8f352f'
  const ts = 'excelsior'

  const hash = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY)


  async function loadMarvel() {

    try {
      const { data } = await api(`/characters?&limit=100&ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}&name=${heroe}`)
      setDatas({ ...data.data })
    } catch (err) {
      console.log(err)
    }
  }

  async function ResetHeroes() {
    try {
      setLoading(true)
      const { data } = await api(`/characters?&limit=100&ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
      setDatas({ ...data.data })
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(datas)


  useEffect(() => {
    loadMarvel()
    ResetHeroes()
  }, [])


  console.log(datas?.results)
  if (loading) {
    return (
      <ContainerError>
        <Lottie autoSize source={Loading} autoPlay loop />
      </ContainerError>
    )
  }

  if (!datas?.results)
    return (
      <ContainerError>
        <Lottie autoSize source={Loading} autoPlay loop />
      </ContainerError>
    )

  function SearchIn() {
    loadMarvel()
    setHeroe('')

  }

  function loadReset() {
    ResetHeroes()
  }

  function onOpen(body: ComicsHeroes) {

    setItem(body)
    modalizeRef.current?.open()
  }
  return (
    <Container>
      <ScrollView>
        <Recipes>
          <TextMarvelTitle>Marvel</TextMarvelTitle>

          <RectButton style={style.ButtonPower} onPress={() => {
            loadReset()
          }} >
            <Icon name="power-off" size={20} color="#000" />

          </RectButton>
          <RectButton onPress={() => {
            SearchIn()

          }} >
            <Icon name="search" size={20} color="#000" />
          </RectButton>
        </Recipes>
        <SubTitleMarvel>Comics</SubTitleMarvel>


        <TextInput placeholder="Search here" clearButtonMode="always" value={heroe} onChangeText={(text) => setHeroe(text)} />



        {datas.results.length > 0 && datas.results.map(({ name, id, thumbnail, description }) => ((
          <RecipeHeroes   style={style.boxShadow} key={String(id)}>


            <BoxInformation>
              <ImageMarvel source={{
                uri: `${thumbnail.path}.${thumbnail.extension}`
              }} />
            </BoxInformation>

            <BoxHeroes>
              <MarvelHeroesName numberOfLines={1}>{name}</MarvelHeroesName>
              <MarvelDescription numberOfLines={5}>{description ? description : 'There is no information or description of this hero'}</MarvelDescription>
            </BoxHeroes>
            <ViewHeroes>
              <ButtonUniqueHero onPress={() => onOpen({ description, id, name, thumbnail })}>
                <ButtonTextHeroe >
                  More information   <Icon name="arrow-right" size={20} color="#000" /> </ButtonTextHeroe>
              </ButtonUniqueHero>

            </ViewHeroes>


          </RecipeHeroes>
        )))}
      </ScrollView>

      <Modalize
        ref={modalizeRef}
        snapPoint={600}
      >
        <ScrollView>
          <ContainerUniqueHeroe >
            <ImagemHeroeMarvel source={{
              uri: `${item?.thumbnail.path}.${item?.thumbnail.extension}`
            }} />

            <RecipeUniqueHeroe>
              <NameHero numberOfLines={1}>{item?.name}</NameHero>
              <DescriptionHero>{item?.description ? item.description : 'There is no information or description of this hero'}</DescriptionHero>
            </RecipeUniqueHeroe>
          </ContainerUniqueHeroe>
        </ScrollView>
      </Modalize>
    </Container>
  )
}

const style = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  ButtonPower: {
    paddingLeft: 50
  }
})


export default ListMarvelPage;