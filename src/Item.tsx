import { StyleSheet, Text, View, Linking } from 'react-native';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LinkIcon from '@mui/icons-material/Link';

import { Icon } from 'react-native-elements';


export default function Item(props : any) {
    return (
        <View key={props.key} style={styles.item}>
            <Text>
                <Icon
                    tvParallaxProperties={""}
                    name='person-outline'
                    type='ionicon'
                    color='#517fa4'
                />
                {props.author}
            </Text>
            <Text>
                <Icon
                    tvParallaxProperties={""}
                    name='book-outline'
                    type='ionicon'
                    color='#517fa4'
                />
               {props.title}
            </Text >
            <Text
            style={{color: "blue"}}
            onPress={() => {Linking.openURL(props.url)}}>
                <Icon
                    tvParallaxProperties={""}
                    name='link-outline'
                    type='ionicon'
                    color='#517fa4'
                />
                {props.url}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor: '#59a6a1',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
})