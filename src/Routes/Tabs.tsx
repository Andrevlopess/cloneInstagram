import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
import Account from "../Screens/Account";
import Explore from "../Screens/Explore";
import {Home} from "../Screens/Home";
import NewPost from "../Screens/NewPost";
import Reels from "../Screens/Reels";

const Tab = createBottomTabNavigator();

export default function TabNav(){

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Explore" component={Explore}/>
                <Tab.Screen name="NewPost" component={NewPost}/>
                <Tab.Screen name="Reels" component={Reels}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}