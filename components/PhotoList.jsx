import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos =[
    {id: 1, description: 'Selfie with mom'},
    {id: 2, description: 'Photo of Breakfast'},
    {id: 3, description: 'My nails painted'},
    {id: 4, description: 'Airplane wing in sky'},
    {id: 5, description: 'Abandoned door'},
    {id: 6, description: 'French Bulldog puppy'},
]

function PhotoList(){
    return(
        <ScrollView style={styles.photoList}>
            {bsPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo}/>
            ))}
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    photoList: {
        flex:1,
        backgroundColor: '#e8e8e8',
    }
})

export default PhotoList;