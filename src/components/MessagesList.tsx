import type { Msg } from './Chat'
import Message from './Message'
type MessagesListProps ={
  messages : Msg[]
}
function MessagesList({messages}:MessagesListProps) {
  return (
    <div className='messages-list'>
        {
            messages.map((msg,index)=>{
               return <Message key={index} message={msg} index={index}/>
            })
        }
    </div>
  )
}

export default MessagesList