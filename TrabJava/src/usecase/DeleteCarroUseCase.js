class DeleteCarroUseCase {
    constructor(presenter, repository, carroDTO) {
        this.presenter = presenter
        this.repository = repository
        this.carroDTO = carroDTO
        this.collection = 'carros'
    }
    execute() {
        this.delete(this.carroDTO)
    }

    async delete(carro) {
        try {
            const delCarro = await this.repository.delete(this.collection, carro)
            this.presenter.ok(delCarro)
        } catch (fail) {
            console.log('Deleteid', fail)
        }
    }
}

module.exports = { DeleteCarroUseCase }