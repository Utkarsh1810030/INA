const keys = require('../config/keys')
const stripe  = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
    app.post('/api/stripe' ,requireLogin, async(req, res) => {
        const paymentIntent = await stripe.paymentIntents.create({
            amount : 600,
            currency: 'inr',
            description: 'Will figure out Later',
            payment_method_data: {
                type: "card",
                card: {
                  token: req.body.id,
                },
              },
              confirmation_method: "manual",
              confirm: "true",
        })

        req.user.credits+=5;
        const user = await req.user.save()

        res.send(user)
    })
}