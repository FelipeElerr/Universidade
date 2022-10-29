const renderiza = ({item})=>{
    return(
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1, color:'black', padding:3}}> {item.aluno } </Text>
      </View>
    );
  }

  export default renderiza;