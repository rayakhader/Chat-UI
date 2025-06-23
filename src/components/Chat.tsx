import { useState } from 'react'
import MessagesList from './MessagesList'
import SearchBar from './SearchBar'
import './chat.css'
import ChatHeader from './ChatHeader'
 export type Msg = {
    content: string
  }
function Chat() {
    const [messages, setMessages] = useState<Msg[]>([])

  return (
    <div className='chat-container'>
            <ChatHeader />
      {messages.length===0 
      ? (
        <p className="welcome-message">Hi there! How can I help you today?</p>
      ):
              <MessagesList messages={messages} />
       }
        <SearchBar messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default Chat