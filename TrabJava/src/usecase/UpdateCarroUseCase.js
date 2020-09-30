class UpdateCarroUseCase {

    constructor(presenter, repository, carroDTO, data) {
        this.presenter = presenter
        this.repository = repository
        this.carroDTO = carroDTO
        this.collection = 'carros'
        this.data = data
    }
    execute() {
        this.update(this.carroDTO, this.data)
    }

    async update(carroId, data) {
        try {
            const newCarro = await this.repository.update(this.collection, carroId, data)
            this.presenter.ok(newCarro)
        } catch (fail) {
            console.log('UpdateUserUseCase.update', fail)
        }
    }
}

module.exports = { UpdateCarroUseCase }