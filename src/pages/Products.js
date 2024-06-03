// Products.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, cartProducts, decrementQuantity, incrementQuantity } from '../redux/action/Action';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { toast } from 'react-hot-toast';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(cartProducts(product));
        toast.success('Product added to cart')
    };

    const handleIncrement = (productId) => {
        dispatch(incrementQuantity(productId));
        toast.success('Product quantity increased')
    };

    const handleDecrement = (productId) => {
        dispatch(decrementQuantity(productId));
        toast.success('Product quantity decreased')
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card sx={{ mt: 4, backgroundColor: '#212121' }}>
                <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'white', textAlign: 'center' }}>
                    Your Shopping Cart
                </Typography>
                {cart.map(item => (
                    <Card key={item.id} sx={{ display: 'flex', height: '100px', width: '500px', padding: 2, margin: 2, position: 'relative', backgroundColor: '#424242', color: 'white' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                            <Box sx={{ flex: 1, flexDirection: 'column' }}>
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.description}
                                </Typography>
                                <Typography variant="body1">
                                    x{item.quantity}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
                                    <span>${item.quantity * item.price}</span>
                                    <Box sx={{ flexDirection: 'row' }}>
                                        <Button variant="outlined" sx={{ color: 'white', border: '1px solid white' }} onClick={() => handleIncrement(item.id)}>+</Button>
                                        <Button variant="outlined" sx={{ margin: 1, color: 'white', border: '1px solid white' }} onClick={() => handleDecrement(item.id)}>-</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Card>
                ))}
            </Card>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography variant="h5" sx={{ color: 'white' }}>BUY YOUR FAVORITE PRODUCTS</Typography>
                {products.map(product => (
                    <Card key={product.id} sx={{ mt: 1, display: 'flex', height: '100px', width: '500px', padding: 2, marginBottom: 2, position: 'relative' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                            <Box sx={{ flex: 1, flexDirection: 'column' }}>
                                <Typography variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                                    {product.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
                            <Button variant="contained" sx={{ borderRadius: '999px', backgroundColor: '#212121', color: 'white', mb: 1 }}>
                                <span>${product.price}</span>
                            </Button>
                            <Button variant="outlined" onClick={() => handleAddToCart(product)}>Add to cart</Button>
                        </Box>
                    </Card>
                ))}

            </Box>
        </div>
    );
};

export default Products;
