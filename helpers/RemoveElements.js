

const removeElements = async (conjunto, ...unidades) =>{
  
     unidades.forEach(async o => { 

        try{
         conjunto.removeChild(o)
        }catch{

        }
        
        })
   
}