import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styleColors.css'

function Colors() {
    const styles = {
        backgroundColor: 'green',
        minWidth: '100%',
        minHeight: '100%',
        position: 'relative',
    }

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(
                (result) => {
                    setPhotos(result)
                }
            )
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='parent'>
            {photos.map(photos => (
                <div className='children'>
                    <img key={photos.id} src={photos.url} className="img" />
                </div>
            ))}

        </div>
    )
}

export default Colors



