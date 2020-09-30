
class CreateCarroUseCase {

    constructor(presenter, repository, carroDTO) {
        this.presenter = presenter
        this.repository = repository
        this.carroDTO = carroDTO
        this.collection = 'carros'
    }


    execute() {
        this.save(this.carroDTO)
    }


    async save(carro) {
        try {
            const newCarro = await this.repository.save(this.collection, carro)
            this.presenter.ok(newCarro)
        } catch (fail) {
            console.log('CreateCarroUseCase.save', fail)
        }
    }
}

module.exports = { CreateCarroUseCase }