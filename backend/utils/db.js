import mongoose from 'mongoose';
export const connectDB= () => {
    mongoose.connect('mongodb+srv://ujjutarika35:Test123@cluster0.ublufxm.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(c => console.log(`DB CONNECTED TO ${c.connection.port}`))
    .catch(err => console.log(err))
}