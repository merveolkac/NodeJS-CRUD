const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://<username>:<password>@atlascluster.op55fto.mongodb.net/')
    .then(() => console.log('Veritabanına bağlanıldı'))
    .catch(error => console.error('Veritabanı bağlantısı başarısız:', error));


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

let users = [
    { "name": "merve", "age": 18 },
    { "name": "asli", "age": 20 }
];

async function createUser() {
    try {
        const user = await User.create(users);
        console.log(user);
    } catch (error) {
        console.error('Kullanıcı oluşturma hatası:', error);
    }
}



async function getUser() {
    const user = await User
    .find()
    .or([{ "name":  "merve"}, {"age": 20}]);

    console.log(user);

}



async function updateUser() {

    await User.updateOne({"name": "asli"}, {"age": 30});
    
}

deleteUser();

async function deleteUser() {
     const user = await User.deleteOne({"name": "asli"});
    console.log(user);
}