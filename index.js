function alert(e){
    console.log `${e} is what's up.`
}

function myEach(collection, alert){
    collection.forEach(alert())
    return collection;
}