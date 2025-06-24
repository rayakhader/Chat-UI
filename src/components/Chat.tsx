import { useState } from 'react'
import MessagesList from './MessagesList'
import SearchBar from './SearchBar'
import './chat.css'
import ChatHeader from './ChatHeader'
import { useTranslation } from 'react-i18next'
export type Msg = {
  content: string
}
function Chat() {
  const [messages, setMessages] = useState<Msg[]>([])
  const {t,i18n} = useTranslation()

  return (
    <div className='chat-container' dir={i18n.language==='ar'? 'rtl':'ltr'}>
     <div className="chat-header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <ChatHeader />
  <div className="lang-buttons">
    <button
      className={`lang-button ${i18n.language === 'ar' ? 'active' : ''}`}
      onClick={() => i18n.changeLanguage('ar')}
    >
      AR
    </button>
    <button
      className={`lang-button ${i18n.language === 'en' ? 'active' : ''}`}
      onClick={() => i18n.changeLanguage('en')}
    >
      EN
    </button>
  </div>
</div>

      {messages.length === 0
        ? (
          <p className="welcome-message">{t('Hi there! How can I help you today?')}</p>
        ) :
        <MessagesList messages={messages} />
      }
      <SearchBar messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default Chat