import { useEffect, useState } from 'react'
import MessagesList from './MessagesList'
import SearchBar from './SearchBar'
import ChatHeader from './ChatHeader'
import { useTranslation } from 'react-i18next'
export type Msg = {
  content: string,
  sender: 'user' |'system',
  sentAt: Date,
  reaction?: 'like' | 'dislike',
}
function Chat() {
  const { t,i18n } = useTranslation()
  const [messages, setMessages] = useState<Msg[]>([{
    content: t("Hi there! How can I help you today?"),
    sender: 'system',
    sentAt: new Date()
  }])

  useEffect(()=>{
   const lang = localStorage.getItem('lang');
  if (lang) {
    i18n.changeLanguage(lang); 
  }
  },[])

  function handleAddReaction(index: number, reaction: 'like' | 'dislike') {
    setMessages(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], reaction }
      return updated
    })
  }
  async function handleChangeLanguage(lang: string){
    await i18n.changeLanguage(lang)
    localStorage.setItem('lang',lang);
  }

  return (
    <div className="mx-auto max-w-lg w-full p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="flex justify-between items-center mb-4">
        <ChatHeader />
        <div className="flex gap-2">
          {['ar', 'en'].map((lang) => (
            <button
              key={lang}
              className={`px-3 py-1.5 text-sm font-medium border rounded-md transition ${i18n.language === lang
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              onClick={() => handleChangeLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <MessagesList messages={messages} onReact={handleAddReaction} />
      <SearchBar messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default Chat