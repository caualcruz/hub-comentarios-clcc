import { mapComments, mapCommernts } from "../../../FRONTEND/Comment/models/comment.models";

const URL_API = "http://localhost:7000";

const UserService = {
apiGetUserComments: (userId) =>{
    return new Promise((resolve, reject) =>{
        fetch(`${URL_API}/user-comments`),{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userId)
        }
    })
    .then((response => response.JSON())
        .then (data.success){
            resolve(mapComments)(data.comments))
        } else {
            reject(data.error)
       }
}

export default UserService