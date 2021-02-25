import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import AlbumDetai from './AlbumDetail';

export default function AlbumList(props) {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <ScrollView>
            {!data ? <View><ActivityIndicator size='large' color='grey' /></View> : data.map(album => (
                <AlbumDetai key={album.title} album={album} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})
