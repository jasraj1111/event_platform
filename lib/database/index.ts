import mongoose from 'mongoose';

const MONGODB_URI= process.env.MONGODB_URI;

let  cached =(global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;
    console.log('using existing database connection');
    if(!MONGODB_URI){ 
        console.error('MONGODB_URI is missing');
        throw new Error('MONGODB_URI is missing');
    }

    console.log('new database connection');
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName :'evently',
        bufferCommands : false,
    })

    cached.conn = await cached.promise;
    console.log('connected to database');

    return cached.conn;
}


