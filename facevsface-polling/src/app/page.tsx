

  import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Toolbar, AppBar } from '@mui/material';
  
  const Home = () => {
    return (
      <Container>
        {/* Header */}

  
        {/* Hero Section */}
      {/* Hero Section */}
      <Box my={4} textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Join the Ultimate Face-Off and Win Big!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Participate in Face vs Face Polling and Win Money Every Week!
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Get Started Now
        </Button>
      </Box>
  
        {/* Winner Cards */}
        <Box my={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Recent Winners
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Winner 1"
                  height="140"
                  image="/image.png"
                  title="Winner 1"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Winner 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    $500 Prize
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Winner 2"
                  height="140"
                  image="/image.png"
                  title="Winner 2"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Winner 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    $300 Prize
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Winner 3"
                  height="140"
                  image="/image.png"
                  title="Winner 3"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Winner 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    $200 Prize
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
  
        {/* Winner of the Week Board */}
        <Box my={4} textAlign="center">
          <Typography variant="h5" component="h2" gutterBottom>
            Winner of the Week
          </Typography>
          <Box mt={2} p={2} border={1} borderColor="grey.300">
            <Typography variant="h6" component="h3">
              John Doe
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              $1000 Prize
            </Typography>
          </Box>
        </Box>
  
        {/* Footer */}
        <Box my={4} textAlign="center">
          <Typography variant="body2" color="textSecondary" component="p">
            © 2024 FaceVsFace Polling. All rights reserved.
          </Typography>
        </Box>
      </Container>
    );
  };
  
  export default Home;
  
