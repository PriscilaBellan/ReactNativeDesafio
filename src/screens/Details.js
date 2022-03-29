import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MyButton from '../components/MyButton';

export default class Details extends React.Component {
  render() {
    const { item } = this.props.route.params;
    return (
      <View style={styles.mainView}>
        <Text style={styles.textDetails}>{`Localização: ${item.localizacao}`}</Text>
        <Text style={styles.textDetails}>{`Valor: ${item.preco}`}</Text>
        <Text style={styles.textDetails}>{`Categoria: ${item.categoria}`}</Text>
        <Text style={styles.textDetails}>{`Internet: ${item.internetPrivativa}`}</Text>
        <Text style={styles.textDetails}>{`Home Office: ${item.homeOffice}`}</Text>
        <Text style={styles.textDetails}>{`Ar Condicionado: ${item.arCondicionado}`}</Text>
        <Text style={styles.textDetails}>{`Dormitórios: ${item.dormitorios}`}</Text>
        <Image style={styles.image} source={item.image}></Image>
        <MyButton title={'Back'} screen={'Home'} navigation={this.props.navigation}></MyButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    padding: 32,
  },
  textDetails: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 16,
    margin: 4,
    backgroundColor: 'white'
  },
  image: {
    width: 290,
    height: 200,
    margin: 4,
    marginBottom: 60,
    borderRadius: 6,
  }
});