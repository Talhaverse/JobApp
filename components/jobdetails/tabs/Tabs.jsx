import React from 'react'
import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton = ({name,activeTab,onHandleSearchType})=>(
<TouchableOpacity>
  <Text>{name}</Text>
</TouchableOpacity>
)

const Tabs = ({tabs,activeTab,setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data = {tabs}
      renderItem={
        ({item})=>(
<TabButton
name={item}
activeTab={activeTab}
onHandleSearchType={()=>setActiveTab(item)}
/>
)}
      
      />

    </View>
  )
}

export default Tabs