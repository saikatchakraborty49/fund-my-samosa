import mongoose from 'mongoose'


function dbConnect(){
    mongoose.connect("mongodb+srv://saikatchakraborty416:Xejx2jbf5w0KzXMO@cluster0.b5vql.mongodb.net/fundMySamosa", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB ka Connection is Successful'))
    .catch((error) => {
        console.log('Issue in DB Connection');
        console.error(error.message);
        process.exit(1);
    });
}

export default dbConnect