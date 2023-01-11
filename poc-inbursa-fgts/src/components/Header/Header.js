import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Grid } from '@mui/material';
import { themes } from '../../utils/styleUtils';
import { Menu as MenuIcon } from '@mui/icons-material';
import logoBanco from '../../assets/images/logos/logo_banco.png';
import './Header.css';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = ['Home', 'Saque Aniversário', 'FAQ', 'Como funciona', 'Condições', 'Fale conosco'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar position="sticky" sx={{ bgcolor: themes.colors.lightGrayBackground, boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Responsive Menu Mode */}
            <Box
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logoBanco} alt="Logo Banco Inbursa" style={{ width: '200px' }} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'black' }}
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} href="/">
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* AppBar Responsive */}
            <Box
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Grid container display="flex" alignItems="center" justifyContent="space-between" wrap="nowrap">
                <Grid>
                  <img src={logoBanco} alt="Logo Banco Inbursa" style={{ width: '120px' }} />
                </Grid>
                <Grid>
                  <Button className="button-header-home" href="/login">SIMULAR AGORA!</Button>
                </Grid>
              </Grid>
            </Box>

            {/* Buttons Desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block', textTransform: 'none' }}
                  href="/"
                  className="nav-header-text"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

