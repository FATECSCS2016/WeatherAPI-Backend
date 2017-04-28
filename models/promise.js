function testePromise(delay){
    return new Promise((tudoCerto, deuErrado)=>{
        if(delay>1000){
            setTimeout(()=>{
                deuErrado("Um erro ocorreu");
            },delay);
        }else{
            setTimeout(()=>{
                tudoCerto("Deu tudo certo");                 
            },delay);
        }
    })
}

testePromise(2000).then((data)=>{
    console.log(data);
}).catch((erro)=>{
    console.log(erro);
})

testePromise(1000).then((data)=>{
    console.log(data);
}).catch((erro)=>{
    console.log(erro);
})