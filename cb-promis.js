// ------------------callback ---------------------------------

// const getUserData = (callback) =>{
//     setTimeout(() => {
//         console.log('1. get user data')
//         callback()
//     },800)
// }

// const validateData = (callback) => {
//     setTimeout(() =>{
//         console.log('2. validate')
//         callback()
//     }, 900)
// }

// const registerUser = (callback) => {
//     setTimeout(() => {
//         console.log('3. register')
//         callback()
//     }, 400)
// }

// const sendEmail = (callback) => {
//     setTimeout(() =>{
//         console.log('4. send email')
//         callback(console.log("ok"))
//     }, 200 )
// }

// getUserData(() => {
//     validateData(() => {
//         registerUser(() =>{
//             sendEmail(() => {
//                 console.log("end")
//             })
//         })
//     } )
// })


// ------------------promise ---------------------------------


const getUserData = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. get user data')
            resolve()
        },800)
    })
}

const validateData = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log('2. validate')
            resolve()
        }, 900)
    })

}

const registerUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. register')
            resolve()
        }, 400)
    })
}

const sendEmail = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            console.log('4. send email')
            resolve(console.log("ok"))
        }, 200 )
    })
}

// getUserData()
//     .then(validateData)
//     .then(registerUser)
//     .then(sendEmail)
//     .then(() => {
//         console.log("end")
//     })

// ------------------async await ---------------------------------
async function saf(){
    await getUserData()
    await validateData()
    await registerUser()
    await sendEmail()
    console.log("end")
}

saf()