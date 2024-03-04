const usersModels = require("../models/usersModels");

const getUsers = async (req, res) => {
    try {
        const users = await usersModels.getUsers();
        res.status(200).json({ status: "success", data: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}

module.exports = { getUsers }