"use client"
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Products from './../products/products';



function GetStepContent({ step, handleNext, handleBack }) {
  switch (step) {
    case 0:
      return <AddressForm handleNext={handleNext} steps={step} />;
    case 1:
      return <PaymentForm handleNext={handleNext} steps={step} handleBack={handleBack} />;
    case 2:
      return <Review handleNext={handleNext} steps={step} />;
    default:
      throw new Error('Unknown step');
  }
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping', 'Payment', 'Review'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const container = (
    <Container component="main" maxWidth="sm pe-0" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ border: "0",  color: "white", my: { xs: 3, md: 6 },  background: 'transparent' }}>
        

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Render the appropriate step content */}
            {GetStepContent({ step: activeStep, handleNext, handleBack })}
            {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
            </Box> */}
          </React.Fragment>
        )}
      </Paper>
      {/* Render Copyright component */}
    </Container>
  );

  return (
    <React.Fragment>
      <Container>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
        <div className="row p-0 m-auto">
          <div className='col-12 col-md-6'>
            {container}
          </div>
          <div className='col-12 col-md-6'>
            <Products/>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Checkout;
