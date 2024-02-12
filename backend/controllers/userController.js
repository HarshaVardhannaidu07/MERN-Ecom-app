import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";


//@desc Auth user and get token
//@route POST/api/users/login
//@acces Public
const authUser = asyncHandler(async(req,res) => {

    res.send('auth user')        
});

//@desc Register user 
//@route GET/api/users/
//@acces Public
const registerUser = asyncHandler(async(req,res) => {

    res.send('auth user')        
});

//@desc logout user/ clear cookie 
//@route Post/api/users/logout
//@acces Private
const logoutUser  = asyncHandler(async(req,res) => {

    res.send('logout user')        
});

//@desc get user profile 
//@route GET/api/users/profile
//@acces Private
const getUserProfile = asyncHandler(async(req,res) => {

    res.send('get user profile')        
});

//@desc update user
//@route PUT/api/users/profile
//@acces Private
const updateUserProfile = asyncHandler(async(req,res) => {

    res.send('update user profile')        
});

//@desc Get user
//@route Get/api/users
//@acces Private/Admin
const getUsers = asyncHandler(async(req,res) => {

    res.send('get rusers');        
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

