import { useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


export default function Item(props: any) {

    const [rating, setRating] = useState(0);
    const onRatingChange = () => {
        setRating(rating + 1)
    }

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
                style={{ color: "blue" }}
                onPress={() => { Linking.openURL(props.url) }}>
                <Icon
                    tvParallaxProperties={""}
                    name='link-outline'
                    type='ionicon'
                    color='#517fa4'
                />
                {props.url}
            </Text>
            <Text>
                Rating:
                <TouchableOpacity onPress={onRatingChange}>
                    <View style={{flexDirection : "row"}}>
                        {rating >= 1 ? (
                            <Icon type='ionicon' name='star' tvParallaxProperties={''}></Icon> ) : (
                            <Icon type='ionicon' name='star-outline' tvParallaxProperties={''}></Icon> )
                        }
                        {rating >= 2 ? (
                            <Icon type='ionicon' name='star' tvParallaxProperties={''}></Icon> ) : (
                            <Icon type='ionicon' name='star-outline' tvParallaxProperties={''}></Icon> )
                        }
                        {rating >= 3 ? (
                            <Icon type='ionicon' name='star' tvParallaxProperties={''}></Icon> ) : (
                            <Icon type='ionicon' name='star-outline' tvParallaxProperties={''}></Icon> )
                        }
                        {rating >= 4 ? (
                            <Icon type='ionicon' name='star' tvParallaxProperties={''}></Icon> ) : (
                            <Icon type='ionicon' name='star-outline' tvParallaxProperties={''}></Icon> )
                        }
                        {rating >= 5 ? (
                            <Icon type='ionicon' name='star' tvParallaxProperties={''}></Icon> ) : (
                            <Icon type='ionicon' name='star-outline' tvParallaxProperties={''}></Icon> )
                        }
                    </View>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#59a6a1',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
})