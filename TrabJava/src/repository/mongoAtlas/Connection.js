const {MongoClient, ObjectId} = require('mongodb')


class Connection {

    getClienteMongoDB = async () => {

        try {
            const uri = "mongodb+srv://LucasSatriano:Satriano123!@cluster0.suceq.mongodb.net/TrabJava?retryWrites=true&w=majority";
            const client = await new MongoClient(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            await client.connect()
            const db = client.db("TrabJava")
            return { client, db }
        } catch (error) {
            console.log('Connection.getClienteMongoDB', error)

        }
    }


    getObjectId(stringID){
        try{
            return ObjectId(stringID)
        } catch(fail){
            console.log('Connection.getObjectId', fail)
        }
    }
}   

module.exports = { Connection }