
const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res)=> {

    const users = await User.find();
    res.json(users);

}

usersCtrl.createUser = async (req, res)=> {

    const newUSer = new User(req.body);
    await newUser.save();
    res.json({message : 'The User was create'});

}

usersCtrl.getUser = async (req, res) => {

    const user = await User.findById(req.params.id);
    res.json(user);

}

usersCtrl.updateUser = async (req, res) => {

    const updatedUser = User.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUser);

}

usersCtrl.deleteUser = async (req, res) => {

    await Note.findByIdAndDelete(req.params.id);
    res.json({message : 'The user was deleted'});

}


module.exports = usersCtrl;