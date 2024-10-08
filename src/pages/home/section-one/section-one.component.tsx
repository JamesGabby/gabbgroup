import { Box } from '@mui/material';
import DownArrow from '../../../components/down-arrow/down-arrow.component'
import logo from '../../../images/gabbgroup.png'
import home from '../../../images/codecode.webp'
import { useLayoutEffect } from 'react';
import LazyLoad from 'react-lazyload';

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
      <Box
        sx={{
          width: '100%',
          height: 800,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <div className='flex items-center flex-col'>
          <div className='p-2'>
            <LazyLoad height={200} offset={100}>
              <img className='w-96 mt-56' src={logo} alt='logo' />
            </LazyLoad>
          </div>
          <div>
            <h1 className='text-4xl text-white font-semibold mt-12 px-10'>
              Expertise in Tech Recruitment.
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