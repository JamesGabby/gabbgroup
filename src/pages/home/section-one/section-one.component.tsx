import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import DownArrow from '../../../components/down-arrow/down-arrow.component'
import logo from '../../../images/gabbgroup.png'
import home from '../../../images/codecode.webp'
import { useLayoutEffect } from 'react';

const SectionOne = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <Box
      sx={{
        width: '100%',
        height: 800,
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover'
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rupee Solutions UK</title>
        <link rel="canonical" href="https://rupeesolutions.co.uk/" />
        <meta name="description" content="Intelligent management of tax, accounting and payroll processes." />
      </Helmet>
      <Box
        sx={{
          width: '100%',
          height: 800,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <div className='flex items-center flex-col'>
          <div className='p-2'>
            <img className='w-96 mt-56' src={logo} alt='logo' />
          </div>
          <div>
            <h1 className='text-4xl text-white font-semibold mt-12 px-10'>
            Expertise in .NET & JavaScript Recruitment.
            </h1>
          </div>
          <div className='cursor-pointer'>
            <a href='#/#s1'>
              <DownArrow />
            </a>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default SectionOne