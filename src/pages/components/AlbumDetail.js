import React from 'react'
import { StyleSheet, Text, View, Image, _Image } from 'react-native'

export default function AlbumDetail(props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.contentWrapper}>
                <View>
                    <Image style={styles.thumbnail} source={{uri: props.album.thumbnail_image}} />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{props.album.title}</Text>
                    <Text style={styles.artist}>{props.album.artist}</Text>
                </View>
            </View>
                <View>
                    <Image style={styles.imageStyle} source={{uri: props.album.image}} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#e9ecf2',
        margin: 5,
        padding: 5,
    },
    contentWrapper: {
        paddingHorizontal: 10,
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
    },
    thumbnail: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    textWrapper: {
        marginLeft: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#424242',
    },
    artist: {
        fontSize: 12,
        color: '#cdcfd1'
    },
    imageStyle: {
        height: 300,
    },
})
