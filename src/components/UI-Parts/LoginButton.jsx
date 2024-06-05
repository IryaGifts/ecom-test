import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../@/components/ui/dialog'
import LoginForm from './LoginForm'

function LoginButton() {
  return (
    <div>
        <Dialog>
            <DialogTrigger>LOGIN/SIGNUP</DialogTrigger>
            <DialogContent className="p-0 w-auto max-w-sm">
                <LoginForm/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default LoginButton