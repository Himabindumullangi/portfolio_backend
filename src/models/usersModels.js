const db = require("../../db").firestore();

const getUsers = async () => {
    try {
        const usersCollection = await db.collection("users").get();
        
        const users = [];

        if (usersCollection.empty) {
            throw new Error("No users found.")
        }

        usersCollection.forEach((doc) => {

            const { username, password } = doc.data();

            users.push({
                id: doc.id,
                username,
                password
            })
        })

        return users

    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong.");
    }
}

module.exports = { getUsers };