import { doLogout } from '@/app/actions'
import { Button } from '@nextui-org/react'
import React from 'react'

const LogoutForm = () => {
    return (
        <form action={doLogout}>
            <Button
                color='secondary'
                type='submit'
                name='action'
                value='logout'>
                Logout
            </Button>
        </form>
    )
}

export default LogoutForm
