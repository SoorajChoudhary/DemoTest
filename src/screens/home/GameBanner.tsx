import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '@src/utils/theme'

const GameBanner = () => {
  return (
    <View style={{width:"90%", alignSelf:'center', padding: 10, backgroundColor: AppColor.darkPrimary}}>
      <Text>GameBanner</Text>
    </View>
  )
}

export default GameBanner

const styles = StyleSheet.create({})