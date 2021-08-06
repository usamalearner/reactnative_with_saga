import * as React from 'react';
import {
 
    Text,
    View
   
  } from 'react-native';
import {  NativeBaseProvider,Container, Header, Content, Form,  Input, Divider, Center } from 'native-base';
import { Button } from 'react-native';
import { useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { CurrentUser, GET_ALL_USER_INFO_REQUEST } from '../store/action';
function Login(props){
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')



const handleClick=()=>{

  if(email==="admin@gmail.com" && password==="admin1234"){
    let user ={
      email,
      password,
    }
    
    // props.CurrentUser(user)
   
    props.navigation.navigate('home')
  }
  else{
    alert('Email or Password is Incorrect!');
  }
 


 
 
}


    return(
   
      <NativeBaseProvider>
          <Center>
         <Container style={{backgroundColor:"#EEEDED"}}>
       
         <Divider my={3} />
         
            <View >
              <Text>Email</Text>
              <Input 
                    w="100%"
                    mx={3}
                    placeholder="Your Email"
                    _light={{
                      placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                      placeholderTextColor: "blueGray.50",
                    }}
              value={email}  onChangeText={(e)=>setEmail(e)}/>
            </View>
            
            <View >
              <Text>Password</Text>
              <Input 
               w="100%"
               mx={3}
               placeholder="Your Password"
               _light={{
                 placeholderTextColor: "blueGray.400",
               }}
               _dark={{
                 placeholderTextColor: "blueGray.50",
               }}
                secureTextEntry={true} value={password}  onChangeText={(e)=>setPassword(e)} />
            </View>
         
            <Divider my={2} />
        <Button  color="purple" onPress={()=>handleClick()} title="Login"></Button>
    
       </Container> 
       </Center>
       </NativeBaseProvider>
        
    )
}

const mapStateToProps = (state)=>({
  // students : state.students,
//   all:state.all,

//   current_user:state.current_user
})
const mapDispatchToProps = (dispatch)=>({

  // CurrentUser:(e)=>dispatch(CurrentUser(e))

})

export default connect(mapStateToProps,mapDispatchToProps)(Login)