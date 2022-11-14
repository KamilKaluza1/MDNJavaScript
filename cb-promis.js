// ------------------callback ---------------------------------

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

const registerUser = (callback) => {
    setTimeout(() => {
        console.log('3. register')
        callback()
    }, 400)
}

const sendEmail = (callback) => {
    setTimeout(() =>{
        console.log('4. send email')
        callback(console.log("ok"))
    }, 200 )
}

getUserData(() => {
    validateData(() => {
        registerUser(() =>{
            sendEmail(() => {
                console.log("end")
            })
        })
    } )
})
