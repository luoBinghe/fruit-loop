import { useState } from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { useNavigate } from "react-router-dom";

import './style.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [attention, setAttention] = useState('')

  const navigate = useNavigate();
  const { setIsLogged } = useGlobalContext()

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if(email.length > 0 && password.length > 0){
      setIsLogged(true)
      navigate("/");
    }

    return setAttention(true)
  }

  return(
    <div className='login'>
      <section>
        <p>🍎🥭🍓🥑</p>
        {attention ?
          <span>Para logar voce deve informar email e senha!</span>
          :
          <h1>Faça login para continuar</h1>
        }
      </section>
      <form onSubmit={handleSubmitForm}>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Senha</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>
          entrar
        </button>
      </form>
    </div>
  )
}