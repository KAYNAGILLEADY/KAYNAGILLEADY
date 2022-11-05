//Dados do formulário
const form = document.querySelector('form')
const nome = document.querySelector('#nome')
const email =  document.querySelector('#email')
const senha = document.querySelector('#senha')
const enviar = document.querySelector('.submit')
const olho = document.querySelector('.olho')
const img = document.querySelector('.imagem')
const section = document.querySelector('section')
const usuario = [
    document.querySelector('#nomeUsuario'),
    document.querySelector('#emailUsuario'),
    document.querySelector('#senhaUsuario')
];
const entrar = document.querySelector('.entrar')

//Validando Email
let valido = false
let regex = /\S+@\S+\.\S+/
function validaEmail () {
    regex.test(email.value)? valido = true : valido = false;
    if (valido == true) { validado() } else { console.log('não enviado') }
}

//Mostrar a senha
let olhoAberto = false
olho.addEventListener('click', () => {
    if (olhoAberto == false) {
        senha.setAttribute('type', 'text')
        olhoAberto = true
    }else if (olhoAberto == true){
        senha.setAttribute('type', 'password')
        olhoAberto = false
    }
})

//Enviar formulário
function validado () {
    valorNome = nome.value.split(' ')
    valorEmail = email.value
    valorSenha = senha.value
    localStorage.setItem("nome", valorNome)
    localStorage.setItem("email", valorEmail)
    localStorage.setItem("senha", valorSenha)

    
    let nomeStorage = localStorage.getItem('nome').split(',');
    let emailStorage = localStorage.getItem('email');
    let senhaStorage = localStorage.getItem('senha');
    
    entrar.innerHTML = `Olá, ${nomeStorage[0]}`
    
    usuario[0].innerHTML = nomeStorage[0]
    usuario[1].innerHTML = emailStorage
    usuario[2].innerHTML = senhaStorage
    
    form.style.display = 'none'
    img.style.display = 'none'
    section.style.display = 'block'
    
    nome.value = ''
    email.value = ''
    senha.value = ''
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaEmail()
})


