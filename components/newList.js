
     

const newList = async ()=>{
     
    const blocNewList = await componente.div('blocNewList', 'blocNewList')
    const btnNewList  = await componente.button('btnNewList', 'btnNewList')
    
    appendElements(blocNewList,btnNewList)
    appendElements(area,blocNewList)
    

}



newList()