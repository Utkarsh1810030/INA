const { stripePublishableKey } = require("./dev");

module.exports = {
    googleClientID:process.env.GOOGLE_CLIENT_ID, //'182955185799-so1n6jgrmvdf786bi8vg308tfev9tnni.apps.googleusercontent.com'
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,//'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'
    mongoURI: process.env.MONGO_URI,//'mongodb+srv://uchaudhary1234:eoLWHbsolfghFGCf@cluster0.gbxyzn5.mongodb.net/prod?retryWrites=true&w=majority'
    cookieKey:process.env.COOKIE_KEY,//'asdawdcascawde',
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY, //'pk_test_51NbjIGSFwQSeeZzUqw9VEk7JSIzlpLoku3B7Vikxf479tBZmjBl28cq95dh6NF29jU81CZG9XTrZ4OBjWditL3r500xp3d4ZGl'
    stripeSecretKey:process.env.STRIPE_SECRET_KEY//sk_test_51NbjIGSFwQSeeZzUqcaKUQSoyroWzJNxQkZVAEPddsubNGFkdLJ0cqVt1u51JIzSHziklQRDdIXxKpWN2lhl0IVT00TFw7IPVP
}