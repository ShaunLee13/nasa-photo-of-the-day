/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const ImageDisplay = (props) => {
    const { data } = props

    // return null
    return (
        <Container>
        <p>Picture of the Day for: {data.date} </p>
        <Image src={data.url} alt='Image of the Day' size='large' centered/>
        <a href={data.hdurl} target='_blank' rel='noopener noreferrer'>Click to view this image in HD!</a>
        <h3>Title: {data.title}</h3>
        <p>{data.copyright !== undefined ? `Image copyrighted by ${data.copyright}` : ''}</p>
        <p>{data.explanation}</p>
        </Container>
    )
}

export default ImageDisplay