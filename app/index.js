import { View, Text ,ScrollView, SafeAreaView, Alert} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Home = () => {
const router = useRouter();
const [searchTerm,setSearchTerm] = useState(" ")

const menuPress = () => {
    // Do something when the button is pressed
    Alert.alert('hello')
  };

  const picPress = () => {
    // Do something when the button is pressed
    Alert.alert('Made by Syed Talha Ahmed aka TALHAVERSE')
  };

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
<Stack.Screen options={{
    headerStyle: {backgroundColor: COLORS.lightWhite},
    headerShadowVisible: false,
    headerLeft:()=>(
        <ScreenHeaderBtn iconUrl={icons.menu} dimension = "60%" onPress = {menuPress}  />
    ),
    headerRight:()=>(
        <ScreenHeaderBtn iconUrl={images.profile} dimension = "100%" onPress = {picPress} />
    ),
    headerTitle:" Work Finder ",
}} 
/>

<ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flex:1,padding:SIZES.medium}}>
        <Welcome
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
        handleClick={()=>{
            if(searchTerm) {
                router.push('/search/${searchTerm}')
            }
        }}

        />
        <Popularjobs />
        <Nearbyjobs />

    </View>


</ScrollView>



        </SafeAreaView>
         )
}

export default Home;