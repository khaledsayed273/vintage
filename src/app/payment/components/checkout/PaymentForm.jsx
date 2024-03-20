"use client"
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import visaImg from "../../../../images/visa.png"
import mastercard from "../../../../images/mastercard.png"
import payment3 from "../../../../images/payment3.png"
import Group from "../../../../images/Group 3707.png"
import Image from 'next/image';

export default function PaymentForm({ handleNext, activeStep, steps, handleBack }) {

  const [showCardPayment, setShowCardPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("Pay on Delivery")

  const handlePaymentCard = (e) => {
    const val = e.target.id
    if (val === "Credit/Debit Cards") {
      setShowCardPayment(true)
    } else {
      setShowCardPayment(false)
    }
    setPaymentMethod(val)

  }

  const [cardNumber, setCardNumber] = useState('');


  const handleChange = (event) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^0-9/]/g, '');

    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      if (inputValue.length > 2 && inputValue.endsWith('/')) {
        inputValue = inputValue.slice(0, -1);
      }
    } else {

      if (inputValue.length === 3 && inputValue.indexOf('/') === -1) {
        inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2);
      }
    }
    setCardNumber(inputValue);
  };

  return (
    <React.Fragment>
      <Grid sx={{ borderRadius: "25px" }} className='cart-payment mt-2 px-2' container spacing={3}>
        <Typography className='p-3' variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid item xs={12} >
          <div className="d-flex align-items-start">
            <input onChange={(e) => handlePaymentCard(e)} className='mt-1 me-2' type="radio" id="Pay on Delivery" name="Payment method" value="Pay on Delivery" defaultChecked />
            <label style={{ fontSize: "13px", userSelect: "none", cursor: "pointer" }} htmlFor="Pay on Delivery" >
              Pay on Delivery
              <div>Pay with cash on delivery</div>
            </label>
          </div>
        </Grid>

        <Grid item xs={12} >
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex align-items-start">
              <input onChange={(e) => handlePaymentCard(e)} className='mt-1 me-2' type="radio" id="Credit/Debit Cards" name="Payment method" value={showCardPayment} />
              <label style={{ fontSize: "13px", userSelect: "none", cursor: "pointer" }} htmlFor="Credit/Debit Cards" >
                Credit/Debit Cards
                <div>Pay with cash on delivery</div>
              </label>
            </div>
            <div className='d-flex'>
              <Image className="mx-1" priority="true" alt="visa" width={20} height={20} src={visaImg} />
              <Image className="mx-1" priority="true" alt="mastercard" width={20} height={20} src={mastercard} />
              <Image className="mx-1" priority="true" alt="payment3" width={20} height={20} src={payment3} />
            </div>
          </div>
          {showCardPayment && (
            <div>
              <div className='d-flex my-4'>
                <Input
                  placeholder='Card number'
                  className='my-2 py-1 px-2 input-payment'
                  sx={{
                    background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                    borderRadius: "15px",
                    color: "white !important",
                    border: "0",
                    outline: "0",
                    width: "90%",
                    margin: "0 auto"

                  }}
                  required
                  fullWidth
                  variant="standard"
                  type='text'

                />
              </div>
              <Grid className="mx-auto" sx={{ width: "90%" }} container >
                <Grid item xs={12} md={6}>
                  <Input
                    placeholder='MM/YY'
                    type="text"
                    id="dateInput"
                    className="my-2 py-1 px-2 input-payment"
                    sx={{
                      background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                      borderRadius: "15px",
                      color: "white",
                      border: "0",
                      outline: "0",
                      margin: "0 auto",
                      width: { xs: "100%", md: "95%" }
                    }}
                    required
                    fullWidth
                    variant="standard"
                    value={cardNumber}
                    onChange={handleChange}
                    inputProps={{ maxLength: 5 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input
                    placeholder='CVV'
                    className='my-2 py-1 px-2 input-payment'
                    sx={{
                      background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                      borderRadius: "15px",
                      color: "white !important",
                      border: "0",
                      outline: "0",
                      margin: "0 auto"

                    }}
                    required
                    fullWidth
                    variant="standard"
                    type='text'
                    inputProps={{ maxLength: 3 }}
                  />
                </Grid>

              </Grid>

            </div>
          )}

        </Grid>

        <Grid item xs={12} >
          <div className="d-flex align-items-start">
            <input onChange={(e) => handlePaymentCard(e)} className='mt-1 me-2' type="radio" id="Direct Bank Transfer" name="Payment method" value="Direct Bank Transfer" />
            <label style={{ fontSize: "13px", userSelect: "none", cursor: "pointer" }} htmlFor="Direct Bank Transfer" >
              Direct Bank Transfer
              <div>Make payment directly through bank account.</div>
            </label>
          </div>
        </Grid>

        <Grid item xs={12} >
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex align-items-start">
              <input onChange={(e) => handlePaymentCard(e)} className='mt-1 me-2' type="radio" id="Other Payment Methods" name="Payment method" value="Other Payment Methods" />
              <label style={{ fontSize: "13px", userSelect: "none", cursor: "pointer" }} htmlFor="Other Payment Methods" >
                Other Payment Methods
                <div>Make payment through Gpay, Paypal, Paytm etc</div>
              </label>
            </div>
            <div className='d-flex'>
              <Image className="mx-1" priority="true" alt="visa" width={90} height={20} src={Group} />

            </div>
          </div>
        </Grid>

        <div className='mt-4 w-100 ms-auto me-md-4 d-flex justify-content-center flex-row-reverse'>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              mt: 4, my: 5, background: "white", color: "black", fontWeight: "bold", "&:hover": {
                background: "white",
                opacity: "0.7"
              }
            }}
          >
            {activeStep === steps.length - 1 ? 'Place order' : 'Pay 710.00 $'}
          </Button>

          {activeStep !== 0 && (
            <Button variant="contained"
              onClick={handleBack} sx={{
                width: "120px",
                mt: 4, my: 5, background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))", color: "white", fontWeight: "bold", "&:hover": {
                  background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                  opacity: "0.7",
                },
                mr: 2

              }}>
              Back
            </Button>
          )}
        </div>
      </Grid>



      <Grid sx={{ borderRadius: "25px", marginTop: "50px" }} className='cart-payment' container spacing={3}>
        <Typography className='p-3' variant="h6" gutterBottom>
          Payment Details
        </Typography>
        <div className="p-3">
          <ol className="ps-3" style={{ listStyleType: "inherit" }}>
            <li style={{ fontSize: "16px" }} className="font mb-2">Search for your bank institution or select from the options below.</li>
            <li style={{ fontSize: "16px" }} className="font my-2">If you can not find your bank, please check your spelling or choose another payment method.</li>
            <li style={{ fontSize: "16px" }} className="font my-2">Bank transfer is powered by Stripe.</li>
            <li style={{ fontSize: "16px" }} className="font my-2">Payment processing will take 4-7 business days once the gallery accepts the order.</li>

          </ol>
        </div>

        <Grid className="pb-0 px-3" item xs={12}>
          <label htmlFor="Full name">Full name</label>
          <Input
            className='my-2 py-1 px-2 input-payment'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",

            }}
            required
            id="Full name"
            fullWidth
            variant="standard"
            type='text'
          />
        </Grid>

        <Grid className="pb-0 px-3" item xs={12}>
          <label htmlFor="Email">Email</label>
          <Input
            className='my-2 py-1 px-2 input-payment'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",

            }}
            required
            id="Email"
            fullWidth
            variant="standard"
            type='email'
          />
        </Grid>

        <div className='my-3 ms-3'>
          <FormControlLabel
            sx={{ userSelect: "none" }}
            control={
              <Checkbox color='success' />
            }
            label="Save bank account for later use,"
          />

        </div>

      </Grid>
    </React.Fragment>
  );
}
