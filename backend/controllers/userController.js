import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";



//@desc Auth user and get token
//@route POST/api/users/login
//@acces Public
const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id);
       

        res.status(200).json({
            _id : user._id,
            name: user.name,
            email:user.email,
            isAdmin : user.isAdmin

        });
    }
    else{
        res.status(401);
        throw new Error('Invalid email or password');
    }  
});

//@desc Register user 
//@route POST/api/users/
//@acces Public
const registerUser = asyncHandler(async(req,res) => {
   
    const {name,email,password} = req.body;
    
    const userExists =await User.findOne({email});

    if (userExists){
        res.status(400);
        throw new Error('user already exits');
    }

    const user = await User.create({
        name,
        email,
        password
    });
    if(user) {
        generateToken(res,user._id);
        res.status(201).json({
            _id: user.id,
            name:user.name,
            email: user.email,
            isAdmin:user.isAdmin,
        })
    } 
    else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//@desc logout user/ clear cookie 
//@route Post/api/users/logout
//@acces Private
const logoutUser  = asyncHandler(async(req,res) => {
    res.cookie('jwt','',{ httpOnly:true,expires: new Date(0) });
    res.status(200).json({ message : 'logged out successfully'});    
});

//@desc get user profile 
//@route GET/api/users/profile
//@acces Private
const getUserProfile = asyncHandler(async(req,res) => {

    const user = await User.findById(req.user._id);
    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isadmin : user.isAdmin,
        })
    }else{
        res.status(404);
        throw new Error('user not found');
    }


});

//@desc update user
//@route PUT/api/users/profile
//@acces Private
const updateUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name ;
        user.email = req.body.email || user.email ;

        if(req.body.password){
            user.password = req.body.password;
        }
      
        const updateUser =  await user.save();

        res.status(200).json({
            _id : updateUser._id,
            name: updateUser._name,
            email: updateUser.email,
            isAdmin:updateUser.isAdmin,
        });
    
    }else{
        res.status(404);
        throw new Error('User not found');
    }

  


           
});

//@desc Get user
//@route Get/api/users
//@acces Private/Admin
const getUsers = asyncHandler(async(req,res) => {

    res.send('get users');        
});

//@desc Get user ID
//@route Get/api/users/:id
//@acces Private/Admin
const getUserById = asyncHandler(async(req,res) => {

    res.send('get user by id');        
});

//@desc Delete user
//@route Delete/api/users
//@acces Private/Admin
const deleteUser = asyncHandler(async(req,res) => {

    res.send('delete user');        
});

//@desc Update user
//@route PUT/api/users
//@acces Private/Admin
const updateUser = asyncHandler(async(req,res) => {

    res.send('update user');        
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}

