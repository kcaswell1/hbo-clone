import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function CreateUser() {
  return (
    
      <div className='create-user'>
        <div className='create-user__top'>
          <img className='create-user__logo' src='https://seeklogo.com/images/H/hbo-max-logo-8BD26F0EE7-seeklogo.com.png'/>
          <span className='create-user__title'>Who Is Watching?</span>
        </div>
        <div className='create-user__form'>
            <img className='create-user__user-img' src='https://randomuser.me/api/portraits/men/36.jpg' alt='avatar'/>
            <div className='create-user__input-group'>
                <label>Name</label>
                <input type="text" className='create-user__inputText'/>
                <div className='create-user__colors'>
                    <div className='create-user__'></div>
                    <div className='create-user__color create-user__color--active' style={{background: 'rgb(2,27,64)', background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'}}/>
                    <div className='create-user__color' style={{background: 'rgb(2,27,64)', background: 'rgb(2,0,36)', background: 'linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 38%, rgba(0,212,255,1) 84%)'}}/>
                    <div className='create-user__color' style={{background: 'rgb(2,0,36)', background: 'linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(9,121,74,1) 57%, rgba(11,255,0,1) 100%)'}}/>
                    <div className='create-user__color' style={{background: 'rgb(2,0,36)', background: 'linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(121,27,9,1) 67%, rgba(255,23,0,1) 100%)'}}/>
                    <div className='create-user__color' style={{background: 'rgb(2,0,36)', background: 'linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(97,121,9,1) 47%, rgba(234,255,0,1) 85%)'}}/>
                </div>
            </div>
        </div>
        <div className='create-user__buttons'>
          <button className='create-user__cancel'>Cancel</button>
          <button className='create-user__save'>Save</button>
        </div>
      <div/>
    </div>
  )
}
