import React, { useEffect, useState } from 'react'


//api
// https://randomuser.me/api/?results=5000


const LifeCycle = () => {

    const [users, setUsers] = useState(null)


    const [randomUser, setRandomUser] = useState(null)

    const UI_random_user = () => {
        if(randomUser === null) return;
        console.log("RANDOM USER:",randomUser)
            return <div>
                <h1>Random User</h1>
                <p>{randomUser.name.first}</p>
            </div>
    }


    const pullRandomUser = async () => {
        const request = await fetch("https://randomuser.me/api/?results=1")
        const response = await request.json()
        console.log("api random",response)
        setRandomUser(response.results[0])
    }







    useEffect(() => {

        const make_api_request = async () => {

            setTimeout(async () => {
                const request = await fetch("https://randomuser.me/api/?results=100")
                const response = await request.json()
                console.log("API'DEN GELEN",response)
                setUsers(response.results)
            },1000)

          


        }

        make_api_request()

    },[])

    if(users === null){
        return <div>Lütfen bekleyiniz sayfa yükleniyor..</div>
    }



  return (
    <>

            <h1>Yaşam Döngüsü</h1>
            <ul>
                {users.map((user) => {
                    return <li key={user.login.uuid}>
                        <h3>{user.name.first}</h3>
                    </li>
                })}
            </ul>

            <h3>Rastgele Kullanıcı Çek</h3>
            <button onClick={pullRandomUser}>ÇEK</button>
            {UI_random_user()}
    
    
    </>
  )
}

export default LifeCycle