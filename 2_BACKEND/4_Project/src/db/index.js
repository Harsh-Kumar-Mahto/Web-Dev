import {mongoose} from 'mongoose';
import {DB_NAME} from '../constant.js';

const connectDB = async () => {             //function to connect the database
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)     //storing in the variable is not necessary, we use mongoose.connect and then provide the mongodb url and the database name in the constants file
        // console.log(connectionInstance);        //print whole info of the connection
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);   //print the connection host
        
        
    } catch (error) {          
        console.log("MONGODB connection error:",error);        //in case of any error during the connection
        process.exit(1)
    }
}

// The above function is not yet executed, we could have done that but for consistency and clearity we are doing it this way

export default connectDB;