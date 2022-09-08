fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
        console.log(respObj.total_pages);
    })

fetch('https://reqres.in/api/users/1000')
    .then(response =>{
        if (response.ok){
            return response.json();
        }else{
            throw new Error('No existe el usuario 1000')
        }
    })
    .then(console.log)
    .catch(error =>{
        console.log('error en la peticion')
        console.log(error);
    })