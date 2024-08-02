import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';
import { useLayoutEffect } from 'react';
import blue2 from '../../../images/blue2.avif'


const SectionTwo = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: `url(${blue2})`,
        backgroundSize: 'cover',
        
      }}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          paddingBottom: 10,
          paddingTop: 5
        }}
      >
      <Grid id='/accounting/#s1' container sx={{ flexGrow: 1 }} spacing={1}>
        <Grid item xs={12}>
          <h1 className='text-4xl text-green-100 font-semibold mt-20 px-1'><b>You</b> Are Our Focus</h1>
          <div className='w-full flex justify-around'>
            <div className='text-white text-left text-xl mt-10 px-10 max-w-4xl flex flex-wrap'>
              <p>Here at GabbGroup we specialise in software development talent solutions across a number of specialist industries.</p>
              <p className='mt-4'>Our aim is simple: To provide unique opportunities to our candidates, and provide exceptional value 
                to our clients. All the while maintaining our "best practice" standards to ensure a smooth and pleasant 
                recruitment process.
              </p> 
              <p className='my-4'>As a business we believe very strongly in our motto, our 
                Brand Identity and our company values:
              </p>
            </div>
          </div>
          <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 5 }}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper sx={{ height: 340, width: 250, background: 'rgba(21, 28, 72, 1)', borderRadius: '10%' }}>
                  <Paper sx={{ height: 335, width: 245, background: '#000000', borderRadius: '10%', opacity: .8 }}>
                    {value.icon}
                    <h1 className='text-2xl text-white font-semibold p-5'>{value.title}</h1>
                    <p className='text-l text-white px-5'>{value.description}</p>
                  </Paper>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default SectionTwo