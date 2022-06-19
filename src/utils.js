export const isArrayEmpty = (arr) =>{
if(arr !== null && arr !== undefined && arr.length > 0){
    return false
}
return true
}

export const dumpLogs = (message) =>{
    console.log(message)
}

// export {isArrayEmpty, dumpLogs}