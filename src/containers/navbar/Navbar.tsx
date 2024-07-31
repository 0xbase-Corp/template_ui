'use client'

import MenuIcon from '@mui/icons-material/Menu'
import { Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Image from 'next/image'
import { FC, MouseEvent, useState } from 'react'

const pages = {
  Home: '/',
  About: 'about',
  Portfolio: 'portfolio',
  Team: 'team',
}

const Navbar: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0C3C4C', color: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <Image src="/assets/logo.svg" alt="0xbase Logo" width={140} height={60} />
          </Typography>

          {/* Expanded Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {Object.entries(pages).map(([text, link]) => (
              <Typography
                key={text}
                component="a"
                href={link}
                noWrap
                sx={{
                  mr: 2,
                  color: '#fff',
                  display: 'block',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  '&:hover': {
                    color: '#09EAB4',
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* Collapsed Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.entries(pages).map(([text, link]) => (
                <MenuItem key={text} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={link}
                    textAlign="center"
                    sx={{
                      color: '#333',
                      textDecoration: 'none',
                    }}
                  >
                    {text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for small screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            <Image src="/assets/logo.svg" alt="FolioNomics Logo" width={90} height={28} />
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: 1,
              borderRadius: 2,
              borderColor: '#09EAB4',
              cursor: 'pointer',
              px: { xs: 1, md: 4 },
              py: { xs: 0.7, md: 1 },
              fontSize: { xs: '0.7rem', md: '1rem' },
            }}
          >
            Contact Us
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
