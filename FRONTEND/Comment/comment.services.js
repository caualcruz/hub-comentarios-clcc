const URL_API = 'https://localhost:7000.'

const commentService = {
    apiGetComment: (resolve, reject) =>{
        return new Promise((resolve, reject) =>{

            fetch(`${URL_API}/comment`).then((response) => response.json).then(data =>{
                if (data.success) {
                    resolve(data.comment)
                } else{
                    reject('Erro na requisição')
                }
            })
        }).catch((error) =>{reject(error)})
    
    }
}