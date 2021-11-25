


const clickNewList = async ()=>{

    if(area.querySelectorAll('button').length < 1 ){

    const blocNewList = await componente.div('blocNewList', 'blocNewList')
    const btnNewList  = await componente.button('btnNewList', 'btnNewList')
    btnNewList.textContent = '(+)'
    btnNewList.addEventListener('click',async  ()=>  {

            await clickNewList()
            setNameNewSchema()
    })
    appendElements(false,blocNewList,btnNewList)
    appendElements(false, area,blocNewList)
    

    }else{
        
        const blocNewList = await componente.div('blocNewList', 'blocNewList')
        const List = await componente.button('list', 'list')

        List.addEventListener('click',console.log("testando"))

        appendElements(false,blocNewList,List)
        appendElements(false, area,blocNewList)
    }
    
   
}


const setNameNewSchema = async ()=>{

    openAndClose(areaQuestion, 'areaQuestion', area )
   


    const tituloSetNomeSchema = await componente.p('tituloBoxSetNome')
    const inputSetNomeSchema  = await componente.input('inputSetNomeSchema')
    const btnSetNomeSchema    = await componente.button('btnSetNomeSchema')

    tituloSetNomeSchema.textContent = 'Insira o nome do seu novo esquema '
    inputSetNomeSchema.type = 'text'
    btnSetNomeSchema.textContent = 'Salvar esquema '





    btnSetNomeSchema.addEventListener('click', async ()=>{
        
  
            area.querySelectorAll('.list')[0].textContent = inputSetNomeSchema.value
    
        
    
        openAndClose(area, 'area', areaQuestion )
        areaQuestion.innerHTML=""

      
      
    })


    

   appendElements(  true,
                    areaQuestion, 
                    tituloSetNomeSchema,
                    inputSetNomeSchema,
                    btnSetNomeSchema
                )
}



clickNewList()