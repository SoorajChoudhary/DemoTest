import {NativeStackNavigationProp} from "@react-navigation/native-stack"

export type RootStackParamList = {
    register : undefined,
    login: undefined,
    bottom: undefined
} 

export type TabStackParamList = {
    home: undefined,
    casino: undefined,
    book: undefined,
    inplay: undefined,
    more: undefined
}

export type SatckParamList = NativeStackNavigationProp<RootStackParamList>