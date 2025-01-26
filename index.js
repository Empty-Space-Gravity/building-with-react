console.log("hello")

new Promise = ((resolve ,reject)=>{
    let state = 0 ;
    if (state){
        resolve();
    }
    else
    {
        reject();
    }
}).then(()=>{
    console.log("yes")
}).catch((error)=>{
    console.log("error");
})
