
async function calculateIncome(arr){

     const bloc = await arr.querySelectorAll('.setCota')
     let income  = 1.0
    
try{
                    bloc.forEach( async o  => {
                            
                            let n = Number( o.value )

                           income = 
                            n > 0 ? income* n : income*1
                            
                            o.value =  n > 0 ? n.toFixed(2) : Number(1).toFixed(2)

                    })
  return income

}
catch{

  return income

}}


async function verifySetAposta(arr){

  const field = await arr.querySelector('.setAposta')
   
   field.value = field.value < 1 || field.value == 'e'  ? Number(1).toFixed(2) : Number(field.value).toFixed(2) 

}