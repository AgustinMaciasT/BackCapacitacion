
const getBarra = async (req, res) => {
    res.send('Hello World!')
}

const getAgus = async (req, res) => {
    res.json({saludo:"hola"})
}

module.exports = {getBarra, getAgus}