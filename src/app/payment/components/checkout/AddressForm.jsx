"use client"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function AddressForm({ handleNext, activeStep, steps }) {
  return (
    <React.Fragment>


      <Grid sx={{ borderRadius: "25px" }} className="mt-2 cart-payment" container spacing={3}>
        <Grid className='ps-3' item xs={12}>
          <Typography sx={{ fontSize: "18px" }} component="h1" variant="h4" align="left">
            Contact Details
          </Typography>
        </Grid>

        <Grid className="pb-0 px-3" item xs={12} md={6}>
          <label htmlFor="firstName"> First Name</label>
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
            id="firstName"
            fullWidth
            variant="standard"
            type='text'
          />
        </Grid>
        <Grid className="pb-0 px-3" item xs={12} md={6}>
          <label htmlFor="lastName">Last Name</label>
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
            id="lastName"
            fullWidth
            variant="standard"
            type='text'
          />
        </Grid>
        <Grid className="mt-2 py-0 px-3" item xs={12} >
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

        <Grid item xs={12}>
          <label htmlFor="Phone">Phone</label>
        </Grid>

        <Grid className="py-0 px-3 mb-4" item xs={3} >
          <FormControl
            className='mt-3'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",
            }}
            fullWidth>

            <Select
              sx={{ color: "white", padding: "0" }}
              className='input-payment-select ps-2 py-1'
              defaultValue={30}
              inputProps={{
                name: 'age',
              }}
            >
              <MenuItem className='phone-payment text-white' value={10}>10</MenuItem>
              <MenuItem className='phone-payment text-white' value={20}>20</MenuItem>
              <MenuItem className='phone-payment text-white' value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid className="mt-2 py-0 px-3" item xs={9} >

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
            id="Phone"
            fullWidth
            variant="standard"
            type='text'
          />
        </Grid>

      </Grid>

      <Grid sx={{ borderRadius: "25px" }} className="mt-5 cart-payment" container spacing={3}>
        <Grid className='ps-3' item xs={12}>
          <Typography sx={{ fontSize: "18px" }} component="h1" variant="h4" align="left">
            Shipping Details
          </Typography>
        </Grid>

        <Grid className="pb-0 px-3" item xs={12} >
          <label htmlFor="House">Flat/House no.</label>
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
            id="House"
            fullWidth
            variant="standard"
            type="text"
          />
        </Grid>
        <Grid className="pb-0 px-3" item xs={12} >
          <label htmlFor="Address">Address</label>
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
            id="Address"
            fullWidth
            variant="standard"
            type='text'
          />
        </Grid>

        <Grid className="mt-2 py-0 px-3" item xs={12} md={6} >
          <label htmlFor="City">City</label>
          <FormControl
            className='mt-3'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",
            }}
            fullWidth>

            <Select
              sx={{ color: "white", padding: "0" }}
              className='input-payment-select ps-2 py-1'
              defaultValue={30}
              inputProps={{
                name: 'age',
              }}
            >
              <MenuItem className='phone-payment text-white' value={10}>10</MenuItem>
              <MenuItem className='phone-payment text-white' value={20}>20</MenuItem>
              <MenuItem className='phone-payment text-white' value={30}>30</MenuItem>
            </Select>
          </FormControl>

        </Grid>
        <Grid className="mt-2 py-0 px-3" item xs={12} md={6} >
          <label htmlFor="City">Country</label>

          <FormControl
            className='mt-3'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",
            }}
            fullWidth>

            <Select
              sx={{ color: "white", padding: "0" }}
              className='input-payment-select ps-2 py-1'
              defaultValue={30}
              inputProps={{
                name: 'age',
              }}
            >
              <MenuItem className='phone-payment text-white' value={10}>10</MenuItem>
              <MenuItem className='phone-payment text-white' value={20}>20</MenuItem>
              <MenuItem className='phone-payment text-white' value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid className="py-0 px-3" item xs={12} md={6} >
          <h6 className="mt-3">Postal Code</h6>

          <FormControl
            className='mt-3'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",
            }}
            fullWidth>

            <Select
              sx={{ color: "white", padding: "0" }}
              className='input-payment-select ps-2 py-1'
              defaultValue={30}
              inputProps={{
                name: 'age',
              }}
            >
              <MenuItem className='phone-payment text-white' value={10}>10</MenuItem>
              <MenuItem className='phone-payment text-white' value={20}>20</MenuItem>
              <MenuItem className='phone-payment text-white' value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid className="py-0 px-3" item xs={12} md={6} >
          <h6 className="mt-3">Famous Landmark</h6>

          <FormControl
            className='mt-3'
            sx={{
              background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
              borderRadius: "15px",
              color: "white !important",
              border: "0",
              outline: "0",
            }}
            fullWidth>

            <Select
              sx={{ color: "white", padding: "0" }}
              className='input-payment-select ps-2 py-1'
              defaultValue={30}
              inputProps={{
                name: 'age',
              }}
            >
              <MenuItem className='phone-payment text-white' value={10}>10</MenuItem>
              <MenuItem className='phone-payment text-white' value={20}>20</MenuItem>
              <MenuItem className='phone-payment text-white' value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <div className='my-3 ms-3'>
          <FormControlLabel
            sx={{ userSelect: "none" }}
            control={
              <Checkbox color='success' />
            }
            label="My shipping and Billing address are the same"
          />

        </div>
        <div className='mt-4 ms-auto me-4'>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              mt: 4, ml: "auto", my: 5, background: "white", color: "black", fontWeight: "bold", "&:hover": {
                background: "white",
                opacity: "0.7"
              }
            }}
          >
            {activeStep === steps.length - 1 ? 'Place order' : 'Continue'}
          </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
}
