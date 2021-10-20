import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  List,
  ListItem,
  Container,
  ListItemText,
} from '@mui/material'

// Axios
import { getCartItems } from 'services'

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh;
  align-items: center;
  justify-items: center;
`

export default function CartPage() {
  let history = useHistory()

  const [cartItems, setCartItems] = useState([])
  const [qty, setQty] = useState(1)

  useEffect(() => {
    console.log(qty)
    const fetchCart = async () => {
      let result = await getCartItems()
      setCartItems(result)
    }

    fetchCart()
  }, [qty])

  const checkoutHandler = () => {
    history.push('/shipping')
  }
  return (
    <Container>
      <h1>Shopping Cart</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cartItems &&
          cartItems.map((cartItem) => (
            <>
              <Grid item md={3} key={cartItem.productId}>
                <GridItem>Image</GridItem>
              </Grid>
              <Grid item md={3}>
                <GridItem>
                  <h2>{cartItem.name}</h2>
                </GridItem>
              </Grid>
              <Grid item md={2}>
                <GridItem>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel>Quantity</InputLabel>
                      <Select
                        label='Quantity'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(cartItem.stock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </GridItem>
              </Grid>
              <Grid item md={2}>
                <GridItem>₱{cartItem.price * qty}</GridItem>
              </Grid>
              <Grid item md={2}>
                <GridItem>
                  <Button variant='contained' color='error'>
                    Delete
                  </Button>
                </GridItem>
              </Grid>
              <Grid item md={6}>
                <List>
                  <ListItemText>Special instructions for seller</ListItemText>
                  <ListItem>
                    <textarea></textarea>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={6}>
                <List>
                  <ListItem style={{ textAlign: 'right' }}>
                    <ListItemText>Subtotal ₱{cartItem.price}</ListItemText>
                  </ListItem>
                  <ListItem style={{ justifyContent: 'end' }}>
                    <Button variant='contained' onClick={checkoutHandler}>
                      Checkout
                    </Button>
                  </ListItem>
                </List>
              </Grid>
            </>
          ))}
      </Grid>
    </Container>
  )
}
