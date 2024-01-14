import userRoute from './routes/userRoute.js';
import buyerRoute from './routes/buyerRoutes.js';
import {connectDB} from './utils/db.js';
import sellerRoute from './routes/sellerRoute.js';

import express from 'express';
import { errorMiddleware } from './middlewares/error.js';
const app = express();

connectDB();
app.use(express.json());

app.get('/' , (req,res) => {
    res.send('chal rha hai');
})

// app.use('/api/products' ,); // products will fetch and 
app.use('/api/user' , userRoute); // user will be login  and 
app.use('/api/buyer', buyerRoute); // buyer will show the products  /
app.use('/api/seller' , sellerRoute); // seller will show the products an upload the products 

// error middleware
app.use(errorMiddleware);
app.listen(8080, () => console.log('server running on 8080'));