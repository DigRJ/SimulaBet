async function removeElements (conjunto, ...unidades){

    unidades.forEach(o=>{
            conjunto.removeChild(o)
    })
        

}