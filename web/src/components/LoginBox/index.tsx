import styles from './styles.module.scss'

import { VscGithubInverted } from 'react-icons/vsc'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'


export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)

  return(
    <div className={styles.loginBoxWrapper}>
       <strong>Entre e compartilhe a sua mensagem</strong>
       <a 
       href={signInUrl} 
       className={styles.signInWithGithub}>
         <VscGithubInverted size="22"/>
         Entrar com Github
       </a>
    </div>
  )
}