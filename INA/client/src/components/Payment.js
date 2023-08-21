import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = (props) => {
    return (
        <StripeCheckout
        name='Intelligent NodeJS Application'
        description = "Will figure out Later"
        amount={600}
        token={token => 
            props.handleToken(token)
        }
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        ><button className='stripeBtn'>Add Credits</button></StripeCheckout>
    )
}

export default connect(null , actions)(Payments);