import { Box } from '@mui/material';
import DownArrow from '../../../components/down-arrow/down-arrow.component'
import logo from '../../../images/gabbgroup.png'
import accounting from '../../../images/codecode.webp'

const SectionOne = () => {
  return (
    <Box id="top"
      sx={{
        width: '100%',
        height: 800,
        backgroundImage: `url(${accounting})`,
        backgroundSize: 'cover'
      }}
    >
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
            <p className='text-white text-right font-medium'>Solutions</p>
          </div>
          <div>
            <h1 className='text-4xl text-white font-semibold mt-12 px-10'>
              The most agile and efficient way to manage your accounting tasks.
            </h1>
          </div>
          <div className='cursor-pointer '>
            <a href='#/accounting/#s1'>
              <DownArrow />
            </a>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default SectionOne