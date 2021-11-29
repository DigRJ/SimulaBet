
   const btnAdd =   document.querySelector('[data-js=btnAddSimulation]')

   btnAdd.addEventListener('click',async ()=>{

    createdNewSimulation().then( async (o)=>{
        console.log(o)
       addBlocCota( o )
})})

/*
   ` <article class="blocAddSimulation" data-js="blocAddSimulation" >

   <button class="btnAddSimulation"   data-js="btnAddSimulation" >
   +
   </button> 
   
</article>`*/
  
   

 const arr = [ 
     ['titulo'], ['remove'], ['$cota'],
     ['titulo'], ['remove'], ['$cota']
     ['titulo'], ['remove'], ['$cota']

 ]

 const createdNewSimulation = async ()=>{


    let countSumulations =  await  document.querySelectorAll('.simulation')

       let corpo = await

    ` 

               <div class = 'blocRemoveSimulation' >
               <button class ='btnRemoveSimulation' id=` +
              `${document.querySelectorAll('.simulation').length }` + `  > remove </button>
              
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
                     <input type='number'  class='setAposta'/>
                </article>
                
            </div>  

            <div class = 'blocContabilize' >
                <article class = 'blocContabilizeUnion'>
                     <label class='txtContabilize'> $ : </label>
                     <input type='number'  class='setContabilize'/>
                </article>    
            </div>  

      ` 

      const simulationThis = await componente.div('simulation', `${ document.querySelectorAll('.simulation').length }`)
      simulationThis.innerHTML += await corpo 
      simulationsGrid.appendChild(simulationThis)


       countSumulations =  await  document.querySelectorAll('.simulation')
       return countSumulations.length < 1 ? simulationsGrid : countSumulations[countSumulations.length-1] 

}



async function removeSimulation(target , tag){

    const s     =  simulations.querySelectorAll(`.${tag}`)
    console.log(s)
    target  = parseInt(target)
    removeElements(simulations, s[target] )  

}



async function  addBlocCota  ( o ){

    console.log(this)

    const box        = await o.querySelector('.blocCota')
    const addCota    = await componente.button('.btnAddCota')
    const blocAddCota = await o.querySelector('.blocAddCota')

     addCota.id      = simulations.querySelectorAll('simulation').length
     blocAddCota.appendChild( addCota )

    const removeSimulations = await o.querySelector('.btnRemoveSimulation')


    addCota.addEventListener('click', async function(){


    console.log(this)
    console.log(simulations.querySelectorAll('simulation').length)

     
    const id          = await o.querySelectorAll('.cellCota').length
    const cellCota    = await componente.article('cellCota')
    const indexCota   = await componente.label('indexCota')
    const setCota     = await componente.input('setCota')
    const removeCota  = await componente.button('removeCota')
    let idx           = await (id + 1 )

        
            removeCota.addEventListener('click', async  function(){
                console.log(this)

                let cell =  this.parentNode
                cell.parentNode.removeChild(cell)
      
             })

    setCota.type = 'number'
    removeCota.textContent = 'x'
    indexCota.textContent  =  idx.toString()
    appendElements(true, cellCota, indexCota, setCota, removeCota)
    appendElements(true, box, cellCota)

})

removeSimulations.addEventListener('click', async (e)=>{ 

    console.log(e.target.id)
    removeSimulation(e.target.id, 'simulation' )

 })

 return box
}
