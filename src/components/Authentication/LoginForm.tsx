import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { login } from '../../redux/Authentication/Authentication.actions'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const LoginForm = ()=> {

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const history = useHistory()

    const handleLogin = async () => {
        try {
            await dispatch(login(form))
            Swal
            .fire({
              title: 'Success',
              icon: 'success',
              timer: 2000,
            })
            history.push('/')
        } catch (err) {
            Swal.fire(
                'Error', 
                err.response?.data?.message || err.message, 
                'error'
            )
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form title='Login - AlgaStock' onSubmit={handleLogin}>
        <Input
            label='User'
            name='user'
            value={form.user}
            onChange={handleInputChange}
            placeholder='E. g. your_username321'
        />
        <Input
            type='password'
            name='pass'
            value={form.pass}
            onChange={handleInputChange}
            label='Password'
            />
        <Button>
            Login
        </Button>
    </Form>
    
}

export default LoginForm