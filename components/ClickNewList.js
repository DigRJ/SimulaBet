


const clickNewList = async (elementRecept, tagBloc, tagBtn, tagList)=>{

    if(area.querySelectorAll('button').length < 1 ){

        const bloc = await componente.div(tagBloc, tagBloc)
        const btn  = await componente.button(tagBtn, tagBtn)
        btn.textContent = '(+)'
        btn.addEventListener('click',async  ()=>  {

             await clickNewList(area, 'blocNewList', 'btnNewList', 'list')
             setNameNewSchema()
         })

    appendElements(false,bloc,btn)
    appendElements(false, elementRecept,bloc)
    

    }else{
        
        const id   = await area.querySelectorAll(`.${tagList}`).length
        const bloc = await componente.div(tagBloc, tagBloc)
        const List = await componente.button(tagList,id)

        List.addEventListener('click', function(){
           
            /* SIMULATIONS */

            createdNewSimulation().then(async o=>{

                  

                console.log(o)
                
                addBlocCota(o)

            })


            openAndClose(simulations , 'simulations' , area)

        })

        appendElements(false,bloc,List)
        appendElements(false, elementRecept,bloc)
    }

}


const setNameNewSchema = async ()=>{

    openAndClose(areaQuestion, 'areaQuestion', area )
   

    const tituloSetNomeSchema = await componente.p('tituloBoxSetNome')
    const inputSetNomeSchema  = await componente.input('inputSetNomeSchema')
    const btnSetNomeSchema    = await componente.button('btnSetNomeSchema')
    const btnSetNomeExclude   = await componente.button('btnSetNomeExclude')


    tituloSetNomeSchema.textContent = 'Insira o nome do seu novo esquema '
    inputSetNomeSchema.type         = 'text'
    btnSetNomeSchema.textContent    = 'Salvar esquema'
    btnSetNomeExclude.textContent   = 'Cancelar'


    btnSetNomeSchema.addEventListener('click', async ()=>{


      if(inputSetNomeSchema.value){

            area.querySelectorAll('.list')[0].textContent = inputSetNomeSchema.value
            areaQuestion.innerHTML=""  
            openAndClose(area, 'area', areaQuestion )
            
    }})


    btnSetNomeExclude.addEventListener('click', async ()=>{

           const element = await area.querySelectorAll('.blocNewList')[0]
           await removeElements(area,element)
           areaQuestion.innerHTML=""  
           openAndClose(area, 'area', areaQuestion )

    })

   appendElements(  true,
                    areaQuestion, 
                    tituloSetNomeSchema,
                    inputSetNomeSchema,
                    btnSetNomeSchema,
                    btnSetNomeExclude
                )
}

clickNewList( area , 'blocNewList', 'btnNewList', 'list')


const addNewCota =async (ibox, input, remove )=>{

        appendElements(true, ibox, input, remove  )
    
}

