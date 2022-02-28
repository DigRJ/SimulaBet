

async function appendElements (type, conjunto, ...unidades){

    try{
    
         if(type){

            unidades.forEach(o=>{
            conjunto.appendChild(o)
        })}

        else{
            unidades.forEach(o=>{
            conjunto.prepend(o)
        })}


    }catch(e){

        alert(`Algo deu errado : ${ e }` )
   }

}