//requiero los módulos de nodemailer y googleapis
const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
//defino el constructor de propiedades del modulo de googleapis
const OAuth2 = google.auth.OAuth2
//TIENEN QUE CREAR UN USUARIO DE GMAIL PARA SU APP
//defino las variables de entorno con los datos de las credenciales de google
//estas credenciales son del mail que va a manejar el envio de correos de verificacion
//TIENEN QUE CREAR UN USUARIO DE GMAIL PARA SU APP
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER,BACK_URL } = process.env
//TIENEN QUE CREAR UN USUARIO DE GMAIL PARA SU APP
//TIENEN QUE CREAR UN USUARIO DE GMAIL PARA SU APP
//TIENEN QUE CREAR UN USUARIO DE GMAIL PARA SU APP

//defino una funcion para construir la credencial
function createClient() {
    return new OAuth2( //requiere los datos que alojamos en las variables
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

//defino el transportador
function getTransport(client) {
    //la funcion requiere que le pase la credencial COMPLETA (la recien creada + refresh token)
    //access token tiene vencimiento
    //necesito utilizar métodos de google para poder "calcular" ese codigo
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail',   //nombre de servicio de mensajeria
        auth: {             //los datos de las credenciales
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }
        //propiedad de seguridad
        //para que el antivirus no rechace el mail (ni lo mande a spam)
    })
}

//defino una funcion para definir el cuerpo del mail
//va a ser un template string
//debe tener un link hacia una ruta del controlador de usuario
//que cambia la propiedad verificado de false a true
//este método es otro metodo que hay que codear
function getEmailBody({email, host, code}) {
    return `
        <div>
            <h1>Hola, ${email}</h1>            
            <a href="${host}auth/verify/${code}">
                Verify my account.
            </a>
        </div>
    `
}

//defino una ultima funcion que junta todos los subpasitos anteriores
//esta funcion es la que se necesita exportar y utilizar en el metodo signup
//para efectivamente enviar el correo de verificacion
const accountVerificationEmail = async (mailDelNuevoUsuario,codigoCalculadoConCrypto) => {
    //defino una credencial utilizando la función anterior
    const client = createClient()
    //seteo el refresh token en la credencial
    //es necesario setearlo manualmente
    //porque el constructor NO admite la propiedad REFRESH TOKEN para la creacion de una credencial
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH })
    //defino un transportador utilizando la funcion anterior
    const transport = getTransport(client)
    //defino las opciones del correo
    const mailOptions = {
        from: GOOGLE_USER, //desde donde envio el correo
        to: mailDelNuevoUsuario, //hacia quien
        subject: 'Verify your new account in Amazing Events', //asunto del mail
        html: getEmailBody({ mail:mailDelNuevoUsuario,code:codigoCalculadoConCrypto,host:BACK_URL }) //invoco la funcion que retorna el template string
    }
    //utilizo el metodo sendMail del transportador para enviar el correo
    await transport.sendMail(
        //el metodo requiere
        mailOptions, //opciones del correo
        (error, response) => { //y una función callbacl para manejar el error
            if (error) {
                console.error(error)
                return
            }
            console.log('Email sent!')
        }
    )
}

module.exports = accountVerificationEmail