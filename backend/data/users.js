import bcrypt from 'bcryptjs';

const users = [
    {
        name : 'Admin User',
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin :true,

    },
    {
        name : 'gmrao',
        email:'gmrao@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin :false,
    },
    {
        name : 'luka',
        email:'luka@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin :false,
    },
];

export default users;