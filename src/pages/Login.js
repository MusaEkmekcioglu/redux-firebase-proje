import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { GoogleButton } from 'react-google-button'
import { auth } from '../firebase/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { setActionUser } from '../redux/actions/ActionUser'
import { async } from '@firebase/util'

const Login = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  //const [user, setUser] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.ReducerUse)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, mail, password)
      onAuthStateChanged(auth, (currentUser) => {
        dispatch(setActionUser(setCurrentUser(currentUser.email)))
      })
      navigate('/')
    } catch (error) {
      setError(error)
    } finally {
      setMail('')
      setPassword('')
    }
  }

  function setCurrentUser(string) {
    const current = string.indexOf('@')
    return string.substring(0, current)
  }

  const handleGoogleSubmit = async () => {
    const googleProvider = new GoogleAuthProvider()

    await signInWithPopup(auth, googleProvider)
    await onAuthStateChanged(auth, (currentUser) => {
      dispatch(setActionUser(setCurrentUser(currentUser.email)))
    })
    navigate('/')
  }

  return (
    <div className="login">
      <div className="p-4 box firebase ">
        <Form onSubmit={handleSubmit}>
          <h1>Fairbase Auth Login</h1>
          {error !== '' ? (
            <Alert variant="danger">
              <ul>
                <li> Password should be at least 6 characters </li>{' '}
                <li>must be correct password</li>
                <li>must be a registered email</li>
              </ul>{' '}
            </Alert>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setMail(e.target.value)}
              type="email"
              placeholder="Enter email"
              value={mail}
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

          <div className="d-grid gab-2">
            <Button variant="primary" type="submit">
              <LoginIcon /> LOGIN
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            onClick={handleGoogleSubmit}
            className="g-btn"
            type="dark"
          />
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have a account ? <Link to="/register"> SIGN UP</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
