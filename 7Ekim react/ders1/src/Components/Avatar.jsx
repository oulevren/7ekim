import React from 'react'


//yeni klasör oluştuğunda 3 adımım var
//rfc yazarak kod yapısını çağırıyoruz
//app.jsx de bu fonksiyonu tanımlıyorum



export default function AvatarContainer(props) {

    let veri;
    let source;
    let title;


if(props.name){
    veri = props.name
}else{
   veri = ("isim verilmedi")
}

if(props.url){
    source = props.url
}
if(!props.url){
    source="data:image/jpeg;base64,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"
}

if(props.aciklama){
    title = props.aciklama
}else{
    title= "logo yok"
}





  return (



    <>
    
    
    <div className="avatar-container">

    <div className="flex-cont">
    
        <div>
          <img title={title} src={source} alt="" />
        </div>
        <div>
          <h3>{veri}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    </div>
    
    
    
    </>





  )
}
