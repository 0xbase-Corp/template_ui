import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

const Hero: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#0C3C4C', py: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '1rem', md: '2rem' },
          color: '#fff',
          minHeight: 'auto',
          textAlign: { xs: 'center', md: 'left' },
          maxWidth: '1560px',
          margin: '0 auto',
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem', lg: '1.5rem' },
              fontWeight: 'bold',
              color: '#09EAB4',
            }}
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2.1rem', sm: '2.25rem', lg: '3.25rem' },
              fontWeight: 'bold',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Elit et ac senectus.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.875rem', sm: '0.9rem', lg: '1.1rem' },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Nulla tortor pretium pellentesque adipiscing massa ultricies
            lacinia. Amet porttitor sem parturient vitae nullam amet.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '1rem',
              backgroundColor: '#09EAB4',
              color: '#333',
              padding: { xs: '0.5rem 1rem', md: '0.5rem 1rem' },
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              fontWeight: 'bold',
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            display: 'flex',
            justifyContent: 'center',
            marginTop: { xs: '1rem', md: '0' },
          }}
        >
          <Image
            src="/assets/hero.svg"
            alt="Hero Image"
            width={500}
            height={500}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
