const { CreateCarroUseCase } = require('../../../usecase/CreateCarroUseCase')
const { ListCarroUseCase } = require('../../../usecase/ListCarroUseCase')
const { UpdateCarroUseCase } = require('../../../usecase/UpdateCarroUseCase')
const { DeleteCarroUseCase } = require('../../../usecase/DeleteCarroUseCase')
const { PresenterWEB } = require('../../../presenter/PresenterWEB')
const { OperatorsDB } = require('../../../repository/mongoAtlas/OperatorsDB')

module.exports = app => {

    app.get('/carro', function (req, res) {
        const listCarroUseCase = new ListCarroUseCase(new PresenterWEB(res), new OperatorsDB())
        listCarroUseCase.findAll()
    })

    app.get('/carro/id/:id', function (req, res) {
        const listCarroUseCase = new ListCarroUseCase(new PresenterWEB(res), new OperatorsDB())
        listCarroUseCase.findById(req.params.id)
    })

    app.get('/carro/:marca', function (req, res) {
        const listCarroUseCase = new ListCarroUseCase(new PresenterWEB(res), new OperatorsDB())
        listCarroUseCase.findByName(req.params.name)
    })


    app.post('/carro', function (req, res) {
        new CreateCarroUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })

    app.delete('/carro/:id', function (req, res) {
        new DeleteCarroUseCase(new PresenterWEB(res), new OperatorsDB(), req.params.id).execute()
    })

    app.put('/carroEdit', function (req, res) {
        new UpdateCarroUseCase(new PresenterWEB(res), new OperatorsDB(), req.params.id, req.body).execute()
    })

}