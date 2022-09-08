function sumarUno(numero, callback){
    setTimeout(function(){
        // return numero +1
        callback(null, numero+ 1)
    },3000); 
}
sumarUno(5, function(error, nuevoValor){
    if(error){
        console.log(error);
        return
    }
    sumarUno(nuevoValor, function(error, nuevoValor2){
        if(error){
            console.log(error);
            return
        }
        sumarUno(nuevoValor, function(error, nuevoValor3){
            if(error){
                console.log(error);
                return
            }
            
            
        })
        
        
    })
})

