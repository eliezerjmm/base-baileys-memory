const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowOpcion2 = addKeyword([
    '5',
    'Opcion 2']
    )


const flowConsulta = addKeyword([
    'Tengo consultas que hacer',
    'duda',
    'pregunta',]
    )

    .addAnswer([
        'Ok, *¿Cuál sería tu consulta?*'],

)

const flowQuizas = addKeyword([
    'Quízas en otro momento',
    'despues',
    'para luego',]
    )

    .addAnswer([
        'Te di una *Super Oferta* para aprender desde cero a reparar celulares.','',
        '¿Cuál crees que es el *OBSTACULO MÁS GRANDE* por el que no te has decidido a inscribirte en nuestro curso?'],

    {
        delay: 5000,
    }
)

const flowInsc = addKeyword([
    '¡INSCRIBIRME AHORA!',
    'inscribirme',
    'como pago',]
    )

    .addAnswer([
        '*Pasos de inscripción*','',

        '1. - Ingresa al link 👇',
        'https://hotm.art/superoferta_reparacion4en1','',
    
        '2. - En la parte superior derecha asegurate que este *seleccionada la bandera de tu país.*','',
    
        '3. - Llena toda la información solicitada, *IMPORTANTE VERIFICAR EL CORREO ELECTRÓNICO* ya que allí te llegará el acceso inmediatamente y podrás comenzar a capacitarte. 🏆','',
    
        '4. - Selecciona el *Método De Pago* de tu preferencia y continúa con el *proceso de inscripción.*','',

        '5. - Una vez realizado todo el proceso, *enviame un capture del ticket de pago* para darte acceso al grupo privado en Telegram.','',

        '*Bienvenido* Quedo atento si se te presenta alguna duda. 🤝' ],

)

const flowEuro = addKeyword(['e', 'euro', 'españa'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        '302,5 € - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas ','',
    
        '*✅ 108,90 €*',
        '*✅ 108,90 €*',
        '*✅ 108,90 €*','',

        '🔹 IVA Incluido','', 
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *302,5 €* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/20.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones.','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta]
)

const flowClp = addKeyword(['ch', 'clp', 'chile'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        '$266.100 CLP - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas ','',
    
        '*✅ $95.785 CLP*',
        '*✅ $95.785 CLP*',
        '*✅ $95.785 CLP*','',
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *$266.100 CLP* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/21.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta ]
)

const flowPen = addKeyword(['p', 'soles', 'pen' , 'peru'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        'S/ 1.094,3 PEN - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas ','',
    
        '*✅ S/ 394 PEN*',
        '*✅ S/ 394 PEN*',
        '*✅ S/ 394 PEN*','',
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *S/ 1.094,3 PEN* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/19.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones.','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta ]
)

const flowCop = addKeyword(['c', 'cop', 'colombia'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        '$1.314.200,00 COP - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas ','',
    
        '*✅ $473.149,00 COP*',
        '*✅ $473.149,00 COP*',
        '*✅ $473.149,00 COP*','',
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *$1.314.200,00 COP* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/17.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones.','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta ]
)

const flowMxn = addKeyword(['m', 'mxn', 'mexico'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        '$6.145,00 MXN - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas','',
    
        '*✅ $2.212,12 MXN*',
        '*✅ $2.212,12 MXN*',
        '*✅ $2.212,12 MXN*','',

        '🔹 IVA Incluido','',
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *$6.145,00 MXN* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/16.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones.','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta ]
)

const flowArs = addKeyword(['a', 'ars', 'argentina'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        '$53.240,00 ARS - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas ','',
    
        '*✅ $19.165,00 ARS*',
        '*✅ $19.165,00 ARS*',
        '*✅ $19.165,00 ARS*','',

        '🔹 + Impuesto','',
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *$53.240,00 ARS* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',

        '📌Guía de devolución de impuestos','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/18.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones.','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta ]
)

const flowUsd = addKeyword(['u','b', 'usd', 'eeuu' , 'Boliviano'])

    .addAnswer(
        ['✨ *SUPER OFERTA 4 EN 1* ⏱','',

        '63% de DESCUENTO 🤯','',
    
        '$265 USD - 63% Off','',
    
        '👇 Sólo Por *HOY* Pagas ','',
    
        '*✅ $97 USD*',
        '*✅ $97 USD*',
        '*✅ $97 USD*','',
    
        '🏃‍♂ *5 CUPOS DISPONIBLES*','', 
    
        'Luego el precio pasará a:', 
        '⚠ *$265 USD* ⚠','',
    
        '📌Único pago','',
    
        '📌Sin mensualidades','',
    
        '📌Certificado de finalización 👨‍🎓','',
    
        '📌Asesorías personalizada','',
    
        '📌Bonos Extras','',
    
        '📌7 Días de satisfacción garantizada','',
        
        '✅ ¿Crees que este curso te ayudara a aprender y avanzar está habilidad que realmente deseas?','',
    
        'Si la respuesta fue *SI,* entonces sólo estás a un paso de conseguirlo.'],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/15.jpg',
        }
)

.addAnswer(
    ['Para avanzar necesitamos tomar decisiones.','',

    '*¿Qué decisión vas a tomar?* 👇'],
    {
        buttons: [{ body: '¡INSCRIBIRME AHORA!'},
                  { body: 'Quízas en otro momento'},
                  { body: 'Tengo consultas que hacer'}],
    },
    null,
    [flowInsc, flowQuizas, flowConsulta]
)



const flowPrecio = addKeyword(['¿Qué precio tiene?', '¿Cuál es el precio?', 'precio', 'valor', 'costo'])
    .addAnswer(
        ['En que moneda desearías saber el precio' ,'', 
        '*U.* USA (USD) 🇺🇸 🇧🇴 🇪🇨 🇵🇦 🇵🇷 🇩🇴' ,
        '*A.* Argentina (ARS) 🇦🇷' ,
        '*M.* México (MXN) 🇲🇽' ,
        '*C.* Colombia (COP) 🇨🇴' ,
        '*P.* Perú (PEN) 🇵🇪' ,
        '*CH.* Chile (CLP) 🇨🇱' ,
        '*E.* España (EURO) 🇪🇸' ,'',
        '👆 Escribe *la inicial* correspondiente a la moneda que usas en tu país.'],
    
    null,
    null,
    [flowUsd, flowArs, flowMxn, flowCop, flowPen,flowClp, flowEuro]
)

const flowInformacion4 = addKeyword('Si, Ver Muestra Del Curso')
    .addAnswer(
        [
            '👆 *Este es una muestra de nuestro curso.*',
            '',

            '*Nuestro Curso Online* está diseñado para que tu formación sea completa, de esta manera, *desarrollarás los conocimientos y habilidades* para convertirte en un experto o experta en la Reparación de Celulares.',
            '',

            '*Es 100% Online* 💻📱 lo que te va permitir poder estudiarlo y practicarlo a tu ritmo.',
            '',

            '*Tendrás:*',
            '',

            '🔥 Acceso *Ilimitado* y de por vida.',
            '',

            '🔥 *Actualizaciones permanentes,* no tendrás que adquirir un curso en el futuro para actualizarte.',
            '',

            '🔥 *Asesoría personalizada* de por vida directamente con el instructor a través de un grupo en Telegram, dónde podrás resolver cada una de *tus dudas* de una manera rápida y efectiva.',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/9.mp4',
        }
    )

    .addAnswer(['⏱ *PROMO EXTENDIDA* ⏱',
                '⚠️ ¡5 CUPOS DISPONIBLES! ⚠️'], {
        media: 'https://asmartphone.s3.amazonaws.com/Chatbot/22.jpg',
    })

    .addAnswer(['*Opciones de interés 👇* ',
                ''],
                {
                    buttons: [{ body: 'Tengo consultas que hacer'},
                              { body: '¿Qué precio tiene?'}],
                },
                null,
                [flowPrecio, flowConsulta]
                )

const flowInformacion3 = addKeyword('Si, Ver Garantía')
    .addAnswer(
        [
            '*Hotmart* 🔥 es una empresa brasilera fundada en el 2011 y se ha convertido en la plataforma N° 1 de productos digitales en toda latinoamerica por su confianza y seguridad.',
            '',

            'Nosotros contratamos los servicios de *Hotmart* el cual nos brinda la pasarela de pago y el alojamiento de nuestros cursos.',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/10.jpg',
        }
    )

    .addAnswer(
        [
            '🛡 *Prueba nuestro producto.*',
            '',

            'Si no cumplimos tus expectativas *te devolveremos el 100% de tu inversión* en los primeros 7 días después de la compra.',
            '',

            'Te lo garantiza *Hotmart* 🔥',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/11.jpg',
        }
    )

    .addAnswer('💵 *Paga en la moneda de tu país*', {
        media: 'https://asmartphone.s3.amazonaws.com/Chatbot/14.jpg',
    })

    .addAnswer(
        [
            '1️⃣ *¿Cómo accedo al curso?*',
            '',

            'Una vez realizado tu pago, recibirás un correo electrónico con las instrucciones para acceder al área privada de alumnos dentro de la plataforma de Hotmart, podrás comenzar hoy mismo con tu entrenamiento con acceso ilimitado.',
            '',

            ' 2️⃣ *¿En qué formato está elaborado el curso?*',
            '',

            'Nuestros curso de reparación de celulares esta compuesto por clases magistrales pregrabadas en formato vídeos HD.',
            '',

            ' 3️⃣ *¿Tengo que hacer pago mensuales?*',
            '',

            'No, este entrenamiento es de único pago, nunca tendrás que pagar cuotas o pagos mensuales, y cuando hagamos actualizaciones tendrás acceso a ellas sin ningún costo adicional.',
            '',

            ' 4️⃣ *¿Si estoy en "cero" puedo realizar este curso?*',
            '',

            'Si, nuestros cursos son tanto para principiantes como para personas que quieran iniciar en el medio del servicio técnico de celulares, esta elaborado en módulos y en un lenguaje fácil de entender.',
        ],

        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/12.jpg',
        }
    )
    .addAnswer(
        '⭐ *¿Quieres ver una muestra de nuestro curso?* 👇',
        {
            buttons: [{ body: 'Si, Ver Muestra Del Curso' }],
        },
        null,
        [flowInformacion4]
    )

const flowInformacion2 = addKeyword('Si, Ver Certificado')
    .addAnswer('*¿Qué dicen nuestros alumnos?* 👆', {
        media: 'https://asmartphone.s3.amazonaws.com/Chatbot/5.jpg',
    })

    .addAnswer('*¿Qué dicen nuestros alumnos?* 👆', {
        media: 'https://asmartphone.s3.amazonaws.com/Chatbot/6.jpg',
    })

    .addAnswer('*¿Qué dicen nuestros alumnos?* 👆', {
        media: 'https://asmartphone.s3.amazonaws.com/Chatbot/7.jpg',
    })

    .addAnswer(
        [
            'Te entregaremos *Certificado de Participación*, quedando oficialmente autorizado a realizar todos los tipos de reparaciones que se verás en este curso.',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/8.jpg',
        }
    )
    .addAnswer(
        '⭐ *Si no cumplimos tus expectativas, te devolvemos el 100% de tu dinero* 👇',
        {
            buttons: [{ body: 'Si, Ver Garantía' }],
        },
        null,
        [flowInformacion3]
    )

const flowInformacion1 = addKeyword('Si, estoy de acuerdo')
    .addAnswer(
        [
            'Este curso es tanto para ti que *recién comienzas*, como para ti que *ya iniciastes a reparar* pero necesitas perfeccionar tus técnicas y aprender mucho más.',
            '',

            '🔵Adquirirás habilidades valiosas y prácticas que te permitirán reparar celulares de manera efectiva, lo que podría abrir *nuevas fuentes de ingresos para ti y tu familia.*',
            '',

            '🔵El curso te brindará la *oportunidad de estar actualizado* con la tecnología móvil, ya que te enseñará las últimas técnicas y métodos de reparación.',
            '',

            '🔵Aprenderás de un *profesional con mucha experiencia* en el campo de la reparación de celulares, lo que asegurará que estás recibiendo información de buena fuente y precisa.',
            '',

            'Vamos a enfocar el 90 % del curso en *aprender las técnicas de trabajo* que es lo que más nos cuesta a nosotros los técnicos y lo que nunca muestran en YouTube u otras plataformas.',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/1.png',
        }
    )

    .addAnswer(
        [
            '🤯 *¿Que vas aprender con nuestro curso?*',
            '',

            '*✅REMANUFACTURA* (Cómo reparar pantallas con el vidrio partido)',
            '',

            '*✅Cambio de módulo* ANDROID+IOS.',
            '',

            '*✅Cambio de batería* ANDOID+IOS.',
            '',

            '*✅Cambio de partes* ANDROID+IOS.',
            '',

            '✅Cuáles son y cómo *utilizar las máquinas.*',
            '',

            '✅Cuáles son y cómo *utilizar las herramientas.*',
            '',

            '✅Utilización del *tester o multimetro.*',
            '',

            '*✅Soldadura* nivel inicial. ANDROID.',
            '',

            '*✅Pines de carga*, micrófonos, jumper, ANDROID.',
            '',

            '*✅Diagnosticar fallas* comunes.',
            '',

            '*✅Técnicas, tips y trucos* de más de 15 años de experiencia.',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/2.mp4',
        }
    )

    .addAnswer('🔥 *4 CURSOS POR EL PRECIO DE 1*', {
        media: 'https://asmartphone.s3.amazonaws.com/Chatbot/4.jpg',
    })

    .addAnswer(
        [
            '*📚 Nuestro "Curso 4 EN 1"* es nada más y nada menos que cuatro cursos llenos de contenido, unidos en un solo pack al precio de uno, quiere decir que *vas a recibir 4 curso por el precio de 1.*',
            '',

            '🟡 *Reparación de Android*',
            '',

            '🟡 *Reparación de iPhone*',
            '',

            '🟡 *Soldadura en placas de celulares*',
            '',

            '🟡 *Remanufactura de pantallas*',
            '',

            'El Curso es *totalmente práctico y 100% Online* en vídeos HD.',
            '',

            'Podrás realizarlo *desde cualquier parte del mundo* con conexión a Internet, PC ó Teléfono Inteligente ó Tablet.',
        ],
        {
            media: 'https://asmartphone.s3.amazonaws.com/Chatbot/3.jpg',
        }
    )

    .addAnswer(
        '⭐ *¿Quieres ver el certificado que obtendrás?* 👇',
        {
            buttons: [{ body: 'Si, Ver Certificado' }],
        },
        null,
        [flowInformacion2]
    )

const flowsinexp = addKeyword('No, pero quiero aprender').addAnswer(
    [
        'Ok perfecto, no te preocupes, nuestros cursos están diseñados para *aprender desde cero,* fácil de entender.',
        '',

        'En los siguientes mensajes te enviaré la información del nuestro curso.',
        '*¿Estas de acuerdo?* 👇',
    ],

    {
        buttons: [{ body: 'Si, estoy de acuerdo' }],
    }
)

const flowconexp = addKeyword('Si, tengo experiencia').addAnswer(
    [
        'Ok, excelente que ya tengas conocimientos reparando celulares, esto hace que puedas asimilar mucho mas rápido el aprendizaje..',
        '',

        'En los siguientes mensajes te enviaré la información del nuestro curso.',
        '⭐ *¿Estas de acuerdo?* 👇',
    ],

    {
        buttons: [{ body: 'Si, estoy de acuerdo' }],
    }
)

const flowSaludo = addKeyword(
    ['Hola, estoy interesado en aprender a reparar celulares.', '1']
)
    .addAnswer(
        [
            'Hola! soy Jesús y hago parte del equipo del área de ventas y asesorías de @academiasmartphone', '',

            'Con la ayuda de nuestro asistente virtual te brindarémos toda la información.','',
             
            '*¿Cuál es tu primer nombre?*','',
        ],

        { capture: true }, async (ctx, {flowDynamic}) => {
            const nombre = ctx.body
            var msg = {body: `Hola *${nombre}* es un placer saludarte.` };    
            flowDynamic(msg)
        }
    )


    .addAnswer(
        [
            '¿Tienes alguna *experiencia* en el área de reparación de celulares?',
        ],
        {
            buttons: [
                { body: 'No, pero quiero aprender' },
                { body: 'Si, tengo experiencia' },
            ],
        },

        null,
        [flowsinexp, flowconexp]
    )

async function main() {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo, flowInformacion1, flowPrecio, flowOpcion2])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()