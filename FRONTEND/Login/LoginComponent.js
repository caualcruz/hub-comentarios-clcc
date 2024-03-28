import { User } from "../Comment/models/user.model.js";
import { LoginService } from "../services/login.services.js";
import { setInputComment } from "../Comment/CommentComponent.js"


const getLoginInputs = () => {
  return {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
  }
}

const handleShowHide = () => {
 const newCommentTag = document.getElementById('form-comentario')
  const loginTag = document.getElementById('login-form')
  const menuTag = document.getElementById('menuDis')

  if( newCommentTag.classList.contains('disabled')){
    newCommentTag.classList.remove('disabled')
    loginTag.classList.add('disabled')
    menuTag.classList.remove('disabled')
  } else {
    newCommentTag.classList.add('disabled')
    loginTag.classList.remove('disabled')
    menuTag.classList.add('disabled')
  }
}

const dados = () => {
  const btnDados = document.getElementById('btnDados'); 
 btnDados = document.addEventListener('click',handleShowData)
  const btnBack = document.getElementById('btnBack'); 
 btnBack = document.addEventListener('click',handleShowData)
}

const handleShowData = () => {
 const userData = document.getElementById('user-data')
 const menuTag = document.getElementById('menuDis')
 const newCommentTag = document.getElementById('form-comentario')

  if( userData.classList.contains('disabled')){
    newCommentTag.classList.add('disabled')
    userData.classList.remove('disabled')
  } else {
    newCommentTag.classList.remove('disabled')
    menuTag.classList.add('disabled')
  }
}

const handleLogin = (event) =>{
  event.preventDefault();
  const { username, password } = getLoginInputs();
  const user = new User(null,username.value, password.value)

  LoginService.apiAuthLogin(user).then(result =>{
    console.log(result)
    user.setId(result.id)
    user.setPassword(null)
    user.setFirstname(result.firstname)
    user.setLastname(result.lastname)
    handleShowHide()
    handleShowData()

    setInputComment(`${result.firstname} ${result.lastname} `)
  }).catch((error) =>{
    alert(`Login inválido. Erro:${error.message}`)
  })

  console.log(user)
}
const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById('formLogin')
    formLogin.addEventListener("submit", handleLogin)
    }
  }

  export { LoginComponent }


