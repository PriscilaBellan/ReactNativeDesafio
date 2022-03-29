import * as React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyButton from '../components/MyButton';

const DATA = [
  {
    id: 1,
    localizacao: 'Santos, São Paulo',
    preco: 'R$ 156 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID1.jpg'),
  },
  {
    id: 2,
    localizacao: 'Centro, São Paulo',
    preco: 'R$ 258 / Noite',
    categoria: 'Loft',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID2.jpg'),
  },
  {
    id: 3,
    localizacao: 'Praia Branca, São Paulo',
    preco: 'R$ 63 / Noite',
    categoria: 'Casa',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 3,
    image: require('../assets/Images/ID3.jpg'),
  },
  {
    id: 4,
    localizacao: 'Imbituba, Santa Catarina',
    preco: 'R$ 290 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID4.jpg'),
  },
  {
    id: 5,
    localizacao: 'Florianópolis, SC',
    preco: 'R$ 156 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID5.jpg'),
  },
  {
    id: 6,
    localizacao: 'Bombinhas, SC',
    preco: 'R$ 300 / Noite',
    categoria: 'Cobertura',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID6.jpg'),
  },
  {
    id: 7,
    localizacao: 'Centro, Rio de Janeiro',
    preco: 'R$ 260 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID7.jpg'),
  },
  {
    id: 8,
    localizacao: 'Copacabana, RJ',
    preco: 'R$ 350 / Noite',
    categoria: 'Loft',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID8.jpg'),
  },
  {
    id: 9,
    localizacao: 'Ipanema, Rio de Janeiro',
    preco: 'R$ 320 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID9.jpg'),
  },
  {
    id: 10,
    localizacao: 'Maceió, Alagoas',
    preco: 'R$ 190 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID10.jpg'),
  },
  {
    id: 11,
    localizacao: 'Maragogi, Alagoas',
    preco: 'R$ 310 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID11.jpg'),
  },
  {
    id: 12,
    localizacao: 'Praia do Gunga, Alagoas',
    preco: 'R$ 270 / Noite',
    categoria: 'Chalé',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID12.jpg'),
  },
  {
    id: 13,
    localizacao: 'Vitória, Espírito Santo',
    preco: 'R$ 156 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID13.jpg'),
  },
  {
    id: 14,
    localizacao: 'Vila Velha, Espírito Santo',
    preco: 'R$ 210 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID14.jpg'),
  },
  {
    id: 15,
    localizacao: 'Salvador, Bahia',
    preco: 'R$ 156 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID15.jpg'),
  },
  {
    id: 16,
    localizacao: 'Porto Seguro, Bahia',
    preco: 'R$ 315 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID16.jpg'),
  },
  {
    id: 17,
    localizacao: 'Ilhéus, Bahia',
    preco: 'R$ 275 / Noite',
    categoria: 'Cobertura',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID17.jpg'),
  },
  {
    id: 18,
    localizacao: 'Aracaju, Sergipe',
    preco: 'R$ 160 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 3,
    image: require('../assets/Images/ID18.jpg'),
  },
  {
    id: 19,
    localizacao: 'Recife, Pernambuco',
    preco: 'R$ 280 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 2,
    image: require('../assets/Images/ID19.jpg'),
  },
  {
    id: 20,
    localizacao: 'Porto de Galinhas, PE',
    preco: 'R$ 299 / Noite',
    categoria: 'Apartamento',
    internetPrivativa: 'Sim',
    homeOffice: 'Sim',
    arCondicionado: 'Sim',
    dormitorios: 1,
    image: require('../assets/Images/ID20.jpg'),
  },
];
export default class Home extends React.Component {
  goToDetail = (item) => {
    this.props.navigation.navigate('Details', {screen: 'Details', item: item})
  };

  renderItem = ({item}) => {
    console.log('Item: ', item);
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => this.goToDetail(item)}>
          <Text style={styles.listItemContentTitle}>{`${item.localizacao}`}</Text>
          <Text style={styles.listItemContentSubtitle}>{`${item.preco}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/Images/Home.jpg')}>
        <View style={styles.mainView}>
          <FlatList data={DATA} renderItem={(item) => this.renderItem(item)} />
          <MyButton title="Back" screen="Login" navigation={this.props.navigation} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 2,
    padding: 32,
  },
  imageBackground: {
    height: '100%'
  },
  listItem: {
    height: 65,
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 6,
    borderRadius: 6,
    borderColor: '#777777',
    borderWidth: 3,
  },
  listItemContentTitle: {
    fontSize: 24,
    color: '#7711AA',
    fontWeight: '600',
    margin: 4,
  },
  listItemContentSubtitle: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'flex-end',
    margin: 2,
  },
});