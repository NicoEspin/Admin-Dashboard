import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/Settings/Profile'
import Notifications from '../components/Settings/Notifications'
import Security from '../components/Settings/Security'
import ConnectedAccounts from '../components/Settings/ConnectedAccounts'
import Danger from '../components/Settings/Danger'

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title={"Configuración"}/>
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <Profile/>
        <Notifications/>
        <Security/>
        <ConnectedAccounts/>
        <Danger/>
      </main>
    </div>
  )
}

export default SettingsPage