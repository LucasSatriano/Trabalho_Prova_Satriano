
const MongoClient = require('mongodb').MongoClient;





const result = async () => {

    //mongodb+srv://<username>:<password>@cluster0.kngwq.mongodb.net/<dbname>?retryWrites=true&w=majority
    //DataBase: aula
    //user: aula8sian - ED0RIBzKRl2suQ4c
    //user: aluno - rzO0f12o45BDyqPs

    const uri = "mongodb+srv://aluno:rzO0f12o45BDyqPs@cluster0.kngwq.mongodb.net/aula?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect()
    const db = client.db("aula")

    // const cursor = await db.collection('inventory').find({ item: 'tttt' })
    // cursor.forEach(element => console.log(element))
    // console.log(cursor)


    await db.collection('inventory').insertOne({
        item: 'tttt',
        qty: 344,
        tags: ['cotton'],
        size: { h: 28, w: 35.5, uom: 'cm' },
        qwqwqw: 'qwwqwqwqwq'
    })

    client.close();
}

result()


