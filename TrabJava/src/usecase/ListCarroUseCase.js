class ListCarroUseCase {
    constructor(presenter, repository) {
        this.presenter = presenter
        this.repository = repository
        this.collection = 'carros'
    }


    async findAll(){
        try {
            const allCarros = await this.repository.find(this.collection, {})
            this.presenter.ok(allCarros)
        } catch (fail) {
            console.log('ListCarroUseCase.findAll', fail)
        }
    }
    
    async findByName(carroDTO){
        try {
            const carro = await this.repository.findByName(this.collection, carroDTO)
            this.presenter.ok(carro)
        } catch (fail) {
            console.log('ListCarroUseCase.findAll', fail)
        }
    }

    async findById(carroId){
        try {
            const carro = await this.repository.findById(this.collection, carroId)
            this.presenter.ok(carro)
        } catch (fail) {
            console.log('ListCarroUseCase.findAll', fail)
        }
    }
    


}


module.exports = { ListCarroUseCase }