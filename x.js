const getUserData = (callback) =>{
    setTimeout(() => {
        console.log('1. get user data')
        callback()
    },800)
}

const validateData = (callback) => {
    setTimeout(() =>{
        console.log('2. validate')
        callback()
    }, 900)
}

const registerUser = () => {
    setTimeout(() => {
        console.log('3. register')
    }, 400)
}

const sendEmail = () => {
    setTimeout(() =>{
        console.log('4. send email')
    }, 200 )
}

getUserData()
validateData()
registerUser()
sendEmail()