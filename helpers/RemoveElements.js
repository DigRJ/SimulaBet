

const removeElements = async (conjunto, ...unidades) =>{

     unidades.forEach(async o => { 
         conjunto.removeChild(o)
        
        })

}