const config = require("./src/config/config")
const admin = require("firebase-admin");

const db = admin.initializeApp({
    credential: admin.credential.cert(config.firebaseConfig),
    storageBucket: config.bucket_name,
});

module.exports = db