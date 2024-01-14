import {User} from '../models/user.js';

export const newUser = async (req,res) => {
    try {
        const {first_name , last_name , email , password , user_type , } = req.body;

        
        const user = await User.create({first_name  , last_name , email , password, user_type});
        
        return res.status(201).json({success : true, message : `Welcome ${user.first_name}`})
        
    } catch (err) {
        return res.status(400).json({success : false, message : user})
    }
}


export const loginUser = async (req,res) => {
    try {
        const {email , password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({error : 'Invalid email id'});
        }
        if(user.password === password) {
            const userType = user.user_type;
            return res.status(200).json({
                success: true,
                 // buyer and seller will go to the frontend and vhi se chlega 
                user : user
            })
        }else {
            return res.status(401).json({error : 'Invalid username or password'});
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
}