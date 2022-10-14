let namespace="gamePhylum"

export const setItem = (key,value)=>{
    let storage=window.localStorage.getItem(namespace)
     if(!storage){
        storage={}
     }else{
        storage=JSON.parse(storage) 
     }
     storage[key]=value
     window.localStorage.setItem(namespace,JSON.stringify(storage))

}

export const getItem = (key,def)=>{
    let storage=window.localStorage.getItem(namespace)
    if(!storage){
        return def //返回默认值
    }
   let result=JSON.parse(storage)[key]
   return result||def
}