import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cart = useSelector((state) => state.cart);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#212121", fontWeight: 1000 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            My Online Shopping Site
          </Typography>
          <Button sx={{ textAlign: 'right', border: '1px solid #69f0ae', color: '#69f0ae' }}>
            My Cart
            <Button variant='contained' sx={{ borderRadius: '999px', left: 5, backgroundColor: '#69f0ae', color: '#212121' }}>
              <span>{getTotalItems()}</span>
            </Button>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
