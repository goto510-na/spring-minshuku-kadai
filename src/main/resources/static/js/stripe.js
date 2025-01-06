const stripe = stripe('pk_test_51QcGB8KXoAOc2d8RETjzKK4LX4TylC1lHNAsn0O3JxJJXXh76S6RZFoIrgRaBDNLVuS7LNhNGaeInMZIJcHVe7r600vHYmoBHD');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});
