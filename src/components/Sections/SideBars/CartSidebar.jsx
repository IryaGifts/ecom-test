import React, { useState } from 'react'

function CartSidebar() {
  const [cartItems, setCartItems] = useState(0)
  return (
    <div>CartSidebar
        {cartItems === 0 && ( 
            <div>Your Cart is Empty
                <img src="" alt="Empty-Cart" />
            </div>
        )}
        
    </div>
  )
}

export default CartSidebar