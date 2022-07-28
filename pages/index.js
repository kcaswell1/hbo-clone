import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
      <div className='login-user'>
        <div className='login-user__top'>
          <img className='login-user__logo' src='https://seeklogo.com/images/H/hbo-max-logo-8BD26F0EE7-seeklogo.com.png'/>
          <span className='login-user__title'>Who Is Watching?</span>
        </div>
        <div className='login-user__form'>
          <div className='login-user__user-box'>
            <img className='login-user__user-img' src='https://randomuser.me/api/portraits/men/36.jpg' alt='avatar'/>
            <div className='login-user__user-name'>Kyle</div>
          </div>
        </div>
        <div className='login-user__buttons'>
          <button className='login-user__adult'>Add Adult</button>
          <button className='login-user__kid'>Add Kid</button>
        </div>
      <div/>
    </div>
  )
}
