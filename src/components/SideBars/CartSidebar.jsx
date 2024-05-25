import React from 'react'

function CartSidebar() {
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