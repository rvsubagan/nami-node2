import { v4 as uuidv4 } from 'uuid';


const users =[];

export const getUsers = (req, res) => {
    res.send('Get all users!');
}

export const getUser = (req, res) => {
    res.send('Get user by id');
};

export const createUser = (req, res) => {
    res.send('Create user');
};

export const updateUser = (req, res) => {
    const { id } = req.params;

    res.send('Update a user.')
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    res.send('Delete a user.')
};


