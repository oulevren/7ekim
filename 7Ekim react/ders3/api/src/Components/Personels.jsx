import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//api
// https://randomuser.me/api/?results=5000


const Personels = () => {

    const [staff, setStaff] = useState(null)

    const make_api_request = async () => {
        const endpoint = "https://randomuser.me/api/?results=100"
        const request = await fetch(endpoint)
        const response = await request.json()
        console.log("APİ^DEN GELEN VERİ", response)

        //state güncelle
        setStaff(response.results)
    }

    useEffect(() => {

        make_api_request()
    }, [])


    if(staff === null){
        return <div className='text-center'>
            <p>SAYFA YÜKLENİYOR LÜTFEN BEKLEYİNİZ</p>
        </div>
    }


    return (
        <>

            <div className="d-flex" style={{ flexWrap: "wrap", justifyContent: "space-around" }}>

                {staff?.map((user) => {
                    const isim_soyisim = `${user.name.first} ${user.name.last}`
                    return <Card className='m-3' style={{ width: '25%' }}>
                        <Card.Img variant="top" src={user.picture.large} />
                        <Card.Body>
                            <Card.Title>{isim_soyisim}</Card.Title>
                            <Card.Text>
                                <b>Ülke:{user.location.country}</b> <br />
                                <b>Şehir:{user.location.city}</b> <br />
                                <b>İletişim:{user.email}</b>
                            </Card.Text>
                            <Button className='btn btn-danger'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                })}



            </div>

        </>
    )
}

export default Personels