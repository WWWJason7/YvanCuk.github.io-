let login = document.querySelector('.login a')
let signup = document.querySelector('.signup a')
login.onclick = () => {
    login.className = 'active'
    signup.className = ''
}
signup.onclick = () => {
    login.className = ''
    signup.className = 'active'
}