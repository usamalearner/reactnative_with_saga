import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { CurrentUser, GET_ALL_USER_INFO_REQUEST } from '../store/action';


const Home = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(props.userDetails)
  useEffect(() => {
   props.getAllUserInfo();
 }, [props.getAllUserInfo]);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  console.log(props.current_user)
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View
          style={{
            backgroundColor: 'white',
          }}>
      
      <Text style={styles.sectionTitle}>{props.userDetails.name}</Text>
          <Text style={styles.sectionTitle}>{props.userDetails.email}</Text>
          <Text style={styles.sectionTitle}>{props.userDetails.id}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 32,
    textAlign:'center',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const mapStateToProps = (state)=>({
  current_user:state.current_user,
  userDetails:state.userDetails,
})
const mapDispatchToProps = (dispatch)=>({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
