const router = require('express').Router();

//importando o transporter para enviar emails
const transporter = require('../utils/transporter');

// Funções
router.get('/', (req, res) => {
    res.send('Rota inicial');
});

router.post('/sendMailContact', (req, res) => {

    const name = req.query.name;
    const email = req.query.email;
    const text = req.query.text;

    transporter.sendMail({
        from: `nosapien@hotmail.com`,
        to: 'sistemadominus@gmail.com',
        subject: `Compra do sistema: Cliente ${name}`,
        html: `<h1>Compra do sistema</h1>
                <p>Olá, me chamo ${name}.</P>
                <p>${text}</p> 
                <p>Dados para contato: ${email}</P>`,
        text: `${text}`,
    })
        .then((trans) => res.status(200).send('E-mail enviado'))
        .catch((err) => res.status(500).send('Houve um erro ao enviar e-mail. Detalhe: ' + err))
});

router.post('/sendMailWork', (req, res) => {

    const name = req.query.name;
    const email = req.query.email;
    const fone = req.query.fone;
    const job = req.query.job;
    const gitHub = req.query.job;
    const linkedin = req.query.linkedin;
    const text = req.query.text;
    const file = req.query.file;


    transporter.sendMail({
        from: `nosapien@hotmail.com`,
        to: 'sistemadominus@gmail.com',
        subject: `Trabalhe Conosco - Vaga de: ${job} - Canditado(a): ${name}`,
        html: `<h1>Trabalhe Conosco</h1>
                <p>Olá, me chamo ${name} e estou interessado na vaga de ${job}.</P>
                <p>${text}</p> 
                <h3>Dados para contato:</h3>
                <p>Email: ${email}</p>
                <p>Fone: ${fone}</p>
                <p>GitHub: ${gitHub}</p>
                <p>LinkedIn: ${linkedin}</p>
                `,
        text: `${text}`,
        attachments: [
            {
                filename: file,
                path: file,
            }
        ],
    })
        .then((trans) => res.status(200).send('E-mail enviado'))
        .catch((err) => res.status(500).send('Houve um erro ao enviar e-mail. Detalhe: ' + err))
});


module.exports = router;