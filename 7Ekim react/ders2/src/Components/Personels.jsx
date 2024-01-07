import React, { useState } from 'react'




const Personels = () => {


        const personeller = [
            {id:12312,name:'Evren',lastname:'Ogul',position:'Full-stack'},
            {id:12313,name:'Cemal',lastname:'Kucuk',position:'Front-end'},
            {id:12314,name:'Arda',lastname:'Vural',position:'Full-stack'},
        ]

        const [personel, setPersonel] = useState(personeller)

        const createPersonel = () => {

                let isimUzunluk = 3
                let soyisimUzunluk = 3
                let pozisyonUzunluk = 2

            const isim = prompt("lütfen personel ismi giriniz")
            if(isim === null) return;
            if(isim.length < isimUzunluk){
                alert(`isim minimum ${isimUzunluk} karakterden uzun olmalı`)
                return createPersonel()
            }
            const soyisim = prompt("lütfen personel soyismi giriniz")
            if(soyisim === null) return;
            if(soyisim.length < soyisimUzunluk){
                alert(`soyisim minimum ${soyisimUzunluk} karakterden uzun olmalı`)
                return createPersonel()
            }
            const position = prompt("lütfen personel görevi giriniz")
            if(position === null) return;
            if(position.length < pozisyonUzunluk){
                alert(`pozisyon ismi minimum ${pozisyonUzunluk} karakterden uzun olmalı`)
                return createPersonel()
            }

            const model = {
                id: Date.now(),
                name:isim,
                lastname:soyisim,
                position:position
            }
            console.log("MODEL",model)

            setPersonel([...personel,model])
        }

        const editPersonel = (userId,type) => {

            const users = personel.filter(target => target)
            const user = users.find(target => target.id === userId)
            console.log("bulunan user",user)

                if(type === "AD_GUNCELLE"){
                    const yeniAd = prompt(`${user.name} için yeni ad belirleyiniz`)
                    if(yeniAd === null)
                    return
                    if(yeniAd) user.name = yeniAd
                }
                
                if(type === "SOYAD_GUNCELLE"){
                    const yeniSoyad = prompt(`${user.lastname} için yeni ad belirleyiniz`)
                    if(yeniSoyad === null)
                    return
                    if(yeniSoyad) user.lastname = yeniSoyad
                }
                
                if(type === "POZISYON_GUNCELLE"){
                    const yeniPozisyon = prompt(`${user.position} için yeni ad belirleyiniz`)
                    if(yeniPozisyon === null)
                    return
                    if(yeniPozisyon) user.position = yeniPozisyon
                }

                alert("Kullanici başariyla güncellendi")

                setPersonel(users)
        }

        const deletePersonel = (userId) => {

                const users = personel.filter(user => user.id !== userId)

                const onayla = window.confirm("Bu personeli silmek istediğne emin misin")

                if(onayla){
                    setPersonel(users)
                }
                    // setPersonel(users)

        }



  return (
    <>



    <h1>Personel Ekle(CRUD)</h1>
    <button onClick={createPersonel}>Personel Ekle</button>

        <ul className='personels'>
            {/* user:objeleri döndürecek. index:index noları döndürecek */}
            {personel.map((user,index) => {

                   return <li key={user.id} className='item'>
                        <p>Adı:{user.name} <small onClick={ () => editPersonel(user.id,"AD_GUNCELLE")} className='edit'>Düzenle</small></p>
                        <p>Soyadı:{user.lastname} <small onClick={ () => editPersonel(user.id,"SOYAD_GUNCELLE")} className='edit'>Düzenle</small></p>
                        <p>Görevi:{user.position} <small onClick={ () => editPersonel(user.id,"POZISYON_GUNCELLE")} className='edit'>Düzenle</small></p>
                        <button onClick={() => deletePersonel(user.id)}>Personel Sil</button>
                    </li>
                    

            })}
            
        </ul>
    
    
    
    </>
  )
}

export default Personels