import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IgEiUHTGJkQfFeJs9T9xkEjqjl9L5tDxfqS0f3PNeQ2mycASXdKYXwI9C5WOIlCu6QdGHD72FUuCqPZ7y5WNKwA00v2qN3OUu';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
        label="Pay Now"
        name="Crown Clothing"
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        
        />
    )
}

export default StripeCheckoutButton;