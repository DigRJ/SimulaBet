/*
 const arr = [ 
     ['titulo'], ['remove'], ['$cota'],
     ['titulo'], ['remove'], ['$cota']
     ['titulo'], ['remove'], ['$cota']

 ]
*/
 const createdNewSimulation = async ()=>{

    let countSumulations =  await  document.querySelectorAll('.simulation')

       let corpo = await
    ` 
               <div class = 'blocRemoveSimulation' >
                    <button class ='btnRemoveSimulation'> remove </button>
               </div>  
                <div class = 'blocTxtAposta' >
                    <p class ='txtAposta'> Adicione as Cotações </button>
                </div> 
                <div class = 'blocCota' >
                </div> 
                <div class = 'blocAddCota' >
                </div> 
                <div class = 'blocTxtAposta' >
                   <p class ='txtAposta'> Faça sua aposta </button>
                </div>  
                <div class = 'blocAposta' >
                    <article class = 'blocApostaUnion'>
                        <label class='labelAposta'> $valorAposta </label>
                       <input type='number'  class='setAposta' required/> 
                    </article>
                </div>  
                <div class = 'blocContabilize' >
                    <article class = 'blocContabilizeUnion'>
                        <label class='txtContabilize'> $ : </label>
                        <input type='number'  class='setContabilize' disabled/>
                    </article>    
                </div>  

      ` 

         const simulationThis       = await componente.div('simulation', `${ document.querySelectorAll('.simulation').length }`)
         simulationThis.innerHTML  += await corpo 
         simulationsGrid.appendChild(simulationThis)
         countSumulations           =  await  document.querySelectorAll('.simulation')
         controlAddSimulation()
         return countSumulations.length < 1 ? simulationsGrid : countSumulations[countSumulations.length-1] 

}



async function removeSimulation(target , tag){

    const  getSimulation     =  simulations.querySelectorAll(`.${tag}`)
    target                   =  parseInt(target)
    removeElements(simulations, getSimulation[target] )  
}



async function  addBlocCota  ( o ){

    const box         = await o.querySelector('.blocCota')
    const blocAddCota = await o.querySelector('.blocAddCota')
    const addCota     = await componente.button('.btnAddCota')

          addCota.id          = simulations.querySelectorAll('simulation').length
          addCota.textContent = '+'
          blocAddCota.appendChild( addCota )

    const removeSimulations = await o.querySelector('.btnRemoveSimulation')


    addCota.addEventListener('click', async function(){
     
    const id          = await o.querySelectorAll('.cellCota').length
    const cellCota    = await componente.article('cellCota')
    const indexCota   = await componente.label('indexCota')
    const setCota     = await componente.input('setCota')
    const removeCota  = await componente.button('removeCota')
    let idx           = await (id + 1 )

        
            removeCota.addEventListener('click', async  function(){
                let closedCell =  this.parentNode
                closedCell.parentNode.removeChild(closedCell)
             })


             setCota.addEventListener('input',async function(e){

                 const allCotas        = this.parentNode.parentNode
                 const setContabilize  = allCotas.parentNode.querySelector('.setContabilize') 
                 const getBet          = allCotas.parentNode.querySelector('.setAposta') 

  
                      let income = calculateIncome(allCotas).then( async o =>{

                           verifySetAposta(allCotas.parentNode)
                           setContabilize.value = await
                           getBet.value > 0 ? (o * getBet.value).toFixed(2) : (o * 1).toFixed(2)

                       })


                       getBet.addEventListener('input', async  function(){
                           
                        let income = calculateIncome(allCotas).then( async o =>{

                            verifySetAposta(allCotas.parentNode)
                            setContabilize.value = await
                            getBet.value > 0 ? (o * getBet.value).toFixed(2) : (o * 1).toFixed(2)
 
                        })
                           
                       })

            })


    setCota.type = 'number'
    removeCota.textContent = 'x'
    indexCota.textContent  =  idx.toString()

    appendElements(true, cellCota, indexCota, setCota, removeCota)
    appendElements(true, box, cellCota)

})

removeSimulations.addEventListener('click',function(){ 

       const closedSimulation =  this.parentNode.parentNode
       closedSimulation.parentNode.removeChild(closedSimulation)

 })

 return box

}

async function controlAddSimulation(){

   if(document.querySelectorAll('.simulation').length > 0){

        const bloc = await simulationsGrid.querySelector('.blocAddSimulation') 
        removeElements(simulationsGrid,bloc )
   }

    const blocAddSimulation = componente.article('blocAddSimulation')
    const btnAddSimulation  = componente.button('btnAddSimulation')

         btnAddSimulation.addEventListener('click',async ()=>{
                                 
             createdNewSimulation().then( async (o)=>{
                addBlocCota( o )
             })
        })
                                       
        btnAddSimulation.textContent = '+'
        appendElements(true,blocAddSimulation,btnAddSimulation)
        appendElements(true,simulationsGrid,blocAddSimulation)


}