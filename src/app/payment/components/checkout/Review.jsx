import React from 'react';
import Grid from '@mui/material/Grid';
import Button  from '@mui/material/Button';



export default function Review() {
  return (
    <React.Fragment>
      <Grid sx={{ borderRadius: "25px" }} className='cart-payment mt-2 px-2' container spacing={3}>
        <Grid sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.25)" }} item xs={12}>
          <h5 className="mb-3">Ship to</h5>
          <div>
            aya alaa
          </div>
          <div>
            elgish
          </div>
          <div>
            damanhour, behira 1234
          </div>
          <div>
            Egypt
          </div>
          <div className="mb-3">
            +201026642087
          </div>
        </Grid>

        <Grid sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.25)" }} item xs={12}>
          <h5 className="mb-4">Shipping</h5>
          <div className="mb-4">
            Saver delivery ($670.26)
          </div>
        </Grid>

        <Grid item xs={12}>
          <h5 className="mb-3">Payment Method</h5>

          <div className="mb-3">
            <div>
              • To pay by wire transfer, complete checkout and a member of the Vintage team will contact you with next steps by email.
            </div>
            <div>
              • Please inform your bank that you will be responsible for all wire transfer fees.
            </div>
          </div>
        </Grid>
      </Grid>

      <div className='flex flex-col justify-center items-center mt-4'>
        <Button className="px-10 font" sx={{ border: "1px solid white", background: "white", color: "black" ,fontSize: "16px" ,  letterSpacing: "2px" , textTransform: 'capitalize' , "&:hover":{
          background: "#5d5d5d99",
          color: "white"
        } }}>Submit
        </Button>
        <div className="mt-3">
        By clicking Submit, I agree to Vintage’s Conditions of Sale.
        </div>
      </div>

    </React.Fragment>
  );
}
