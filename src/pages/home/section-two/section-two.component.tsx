import { Box, Grid, Paper } from '@mui/material';
import { paperContent } from './paperContent';

const SectionTwo = () => {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#decdc6',
        paddingBottom: 3
      }}
    >
      <Grid id='/#s1' container sx={{ flexGrow: 1 }} spacing={1}>
        <Grid item xs={12}>
          <h1 style={{ color: 'rgba(21, 28, 72, 1)' }} className='text-4xl font-semibold mt-20 px-3'>
            Why We Are The Best In What We Do
          </h1>
          <Grid container justifyContent="center" spacing={1} sx={{ marginTop: 3 }}>
            {paperContent.map((value) => (
              <Grid key={value.id} item>
                <Paper sx={{ height: 490, width: 350, background: '#decdc6', borderRadius: '10%' }} elevation={0}>
                    {value.icon}
                    <h1 style={{ color: 'rgba(21, 28, 72, 1)' }} className='text-3xl font-semibold p-5'>{value.title}</h1>
                    <p className='text-xl px-5'>{value.description}</p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionTwo