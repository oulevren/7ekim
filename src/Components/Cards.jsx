import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Cards = (props) => {

    let source;
    let name;

    if(props.url){
        source = props.url
    }
    if(!props.url){
        source = "data:image/jpeg;base64,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"
    }

    if(props.baslik){
        name = props.baslik
    }else{
        name = "CANER AKTAŞ"
    }


    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={source} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>



        </>
    )
}

export default Cards