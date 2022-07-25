import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb+srv://Ebedon:Ebedon44@cluster0.6hdouzc.mongodb.net/imagenesP?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
