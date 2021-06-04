
import React,{useState} from 'react';
import { WebView } from 'react-native-webview';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';


const webViewComp = () => {
  return(
    <WebView source={{ uri: 'https://reactnative.dev/' }}   style={styles.video}  javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}/>

  )
}

const App = () => {
  const URL = "https://thedot-test.herokuapp.com/"
  const [yourwebsite, setyourwebsite] = useState('')
  const [url, seturl] = useState('');
  const setWebsite= () => {
    setyourwebsite(yourwebsite  )
  }
  return(
    <View style={{flex:1}}>
<WebView source={{ uri:  URL || yourwebsite }}   style={styles.video}  javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}/>

    <View>
      <TextInput
         value={yourwebsite}
         placeholder="Copy paste your website url to view demo"
        onChange={(txt) => setyourwebsite(txt)}
      />
      <TouchableOpacity style={{backgroundColor:'#3944F7',height:40,justifyContent:'center'}} onPress={setWebsite}>
        <Text style={{alignSelf:'center',color:'white',alignContent:'center',fontSize:18}}>
          View Website
        </Text>
      </TouchableOpacity>
    </View>
    </View>
        


  )
};


const styles = new StyleSheet.create({
  video: {

    flex: 1,
  
  }
})

export default App;
