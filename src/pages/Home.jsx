import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Snackbar, Alert, Badge, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const featuredProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: '$99.99',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$149.99',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$199.99',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$79.99',
    image: 'https://via.placeholder.com/300',
  },
];

function Home({ cart, handleAddToCart, openSnackbar, snackbarMessage, handleCloseSnackbar }) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 4,
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(10px)',
            zIndex: -1,
            background: 'linear-gradient(135deg, rgba(88, 86, 214, 0.9), rgba(130, 128, 255, 0.8))',
          }
        }}
      >
        <Container maxWidth="xl">
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 4,
              animation: 'fadeIn 0.8s ease-out',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              }
            }}
          >
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: 0,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Welcome to E-Shop
            </Typography>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <Badge badgeContent={cartItemCount} color="secondary">
                <Button 
                  variant="contained" 
                  color="secondary"
                  startIcon={<ShoppingCartIcon />}
                  sx={{ 
                    backdropFilter: 'blur(5px)',
                    background: 'rgba(255, 82, 82, 0.7)',
                    '&:hover': {
                      background: 'rgba(198, 40, 40, 0.8)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 20px rgba(255, 82, 82, 0.3)',
                    }
                  }}
                >
                  Cart
                </Button>
              </Badge>
            </Link>
          </Box>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              opacity: 0.9,
              animation: 'fadeIn 0.8s ease-out 0.2s both',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              }
            }}
          >
            Discover amazing products at great prices
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            sx={{ 
              mt: 2,
              backdropFilter: 'blur(5px)',
              background: 'rgba(255, 82, 82, 0.7)',
              animation: 'fadeIn 0.8s ease-out 0.4s both',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              },
              '&:hover': {
                background: 'rgba(198, 40, 40, 0.8)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(255, 82, 82, 0.3)',
              }
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Paper>

      {/* Featured Products */}
      <Container maxWidth="xl">
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: 'primary.main',
            mb: 4,
            letterSpacing: '-0.01em',
            animation: 'fadeIn 0.8s ease-out 0.6s both',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          Featured Products
        </Typography>
        <Grid 
          container 
          spacing={0}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: '16px',
            width: '100%',
            margin: 0,
            '& > *': {
              width: '100%',
              margin: 0,
              animation: 'fadeIn 0.8s ease-out 0.8s both',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              }
            }
          }}
        >
          {featuredProducts.map((product, index) => (
            <Grid item key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  animation: `fadeIn 0.8s ease-out ${0.8 + index * 0.1}s both`,
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    background: 'rgba(255, 255, 255, 0.8)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt={product.name}
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      mb: 1,
                      letterSpacing: '0.01em'
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="secondary.main"
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '1.2rem',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleAddToCart(product)}
                    sx={{ 
                      width: '100%',
                      py: 1.5,
                      backdropFilter: 'blur(5px)',
                      background: 'rgba(88, 86, 214, 0.7)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        background: 'rgba(64, 62, 178, 0.8)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 20px rgba(88, 86, 214, 0.3)',
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            backdropFilter: 'blur(10px)',
            background: 'rgba(76, 175, 80, 0.8)',
            animation: 'slideUp 0.3s ease-out',
            '@keyframes slideUp': {
              '0%': { transform: 'translateY(100%)' },
              '100%': { transform: 'translateY(0)' }
            }
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Home; 