import { StyleSheet, Text, View } from 'react-native';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LinkIcon from '@mui/icons-material/Link';

export default function Item(props : any) {
    return (
        <View key={props.key} style={styles.item}>
             <Text key={props.key}>
                <PersonIcon></PersonIcon> {props.author}
            </Text>
            <Text key={props.key}>
               <MenuBookIcon></MenuBookIcon> {props.title}
            </Text>
            <a href={props.url}>
                <LinkIcon></LinkIcon> {props.url}
            </a>
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