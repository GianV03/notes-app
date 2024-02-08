
const usersCtrl = {};

usersCtrl.getUsers = (req, res)=> res.json({message : 'GET Request'});
usersCtrl.createUser = ((req, res)=> res.json({message : 'POST Request'}));
usersCtrl.getUser = (req, res) => res.json({title : 'nota'});
usersCtrl.updateUser = (req, res) => res.json({message : 'userUpdated'});
usersCtrl.deleteUser = (req, res) => res.json({id : '2342563'});


module.exports = usersCtrl;