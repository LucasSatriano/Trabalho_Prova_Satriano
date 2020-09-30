

module.exports = app => {


    app.get('/', function (req, res) {
        console.log('GET')
        res.send('Hello World')
    })


    app.post('/', function (req, res) {
        console.log('POST')
        res.send('Got a POST request')
    })


    app.put('/', function (req, res) {
        res.send('Got a PUT request at /')
    })


    app.delete('/', function (req, res) {
        res.send('Got a DELETE request at /')
    })



}