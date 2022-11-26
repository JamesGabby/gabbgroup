import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';

const SectionTwo = () => {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#191818',
        paddingBottom: 10
      }}
    >
      <Grid id='/accounting/#s1' container sx={{ flexGrow: 1 }} spacing={1}>
        <Grid item xs={12}>
        <h1 className='text-2xl text-white font-semibold mt-36'>Our current job listing:</h1>
          <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 5 }}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper sx={{ height: 340, width: 250, background: 'black', borderRadius: '10%', boxShadow: '#191818' }}>
                    <h1 className='text-2xl text-white font-semibold p-5'>{value.title}</h1>
                    <p className='text-l text-white px-5'>{value.salary}</p>
                    <p className='text-l text-white px-5 mt-2'>{value.location}</p>
                    <p className='text-l text-white px-5 mt-5'>{value.description}</p>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <h1 className='text-xl text-white font-semibold mt-16 px-10'>Anything catch your eye? Email us at hello@gabbgroup.co to find out more or here about our other opportunities.</h1>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionTwo