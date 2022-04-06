import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseAuth'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/login')
    } catch (error) {
      setError(error)
    } finally {
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className="register">
      <div class="p-4 box">
        <h2 className="mb-3"> FIREBASE AUTH SIGNUP</h2>
        {error !== '' ? (
          <Alert variant="danger">
            <ul>
              <li> Password should be at least 6 characters </li>{' '}
              <li>must be correct password</li>
              <li>must be a valid email</li>
            </ul>{' '}
          </Alert>
        ) : null}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              REGISTER
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account ? <Link to={'/login'}>Log IN</Link>
      </div>
    </div>
  )
}

export default Register
