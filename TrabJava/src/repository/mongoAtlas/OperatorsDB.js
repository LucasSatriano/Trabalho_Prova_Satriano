const { Connection } = require('./Connection')

class OperatorsDB extends Connection {


    async save(collection, data) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            console.log('db', db, 'client', client)
            await db.collection(collection).insertOne(data)
            client.close()
            return data
        } catch (error) {
            console.log('Operators.save', error)
        }
    }

    async find(collection, query) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            const cursor = await db.collection(collection).find(query)
            const allElements = []
            await cursor.forEach(element => allElements.push(element))
            client.close()
            return allElements
        } catch (error) {
            console.log('Operators.find', error)
        }
    }

    async findById(collection, id) {
        try {
            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const carro = await db.collection(collection).findOne(query)
            client.close()
            return carro
        } catch (error) {
            console.log('Operators.findById', error)
        }
    }

    async findByName(collection, name) {
        try {
            const query = {"marca": name}
            const { client, db } = await this.getClienteMongoDB()
            const carro = await db.collection(collection).findOne(query)
            console.log(carro)
            client.close()
            return carro
        } catch (error) {
            console.log('Operators.findByName', error)
        }
    }

    async delete(collection, id) {
        try {
            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const carro = await db.collection(collection).deleteOne(query)
            client.close()
            return carro
        } catch (error) {
            console.log('Operators.DeleteById', error)
        }
    }

    async update(collection, id, data) {
        try {
            const query = { _id: this.getObjectId(data._id) }
            const { client, db } = await this.getClienteMongoDB()
            const carro = await db.collection(collection).findOneAndReplace(query,data)
            client.close()
            return carro
        } catch (error) {
            console.log('Operators.update', error)
        }
    }

}

module.exports = { OperatorsDB }