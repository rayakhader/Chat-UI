import type { Msg } from './Chat'

type MessageProps = {
  message:Msg,
  index:number
}
function Message({message,index}:MessageProps) {
  const alignment= index%2 ===0 ? 'message-left':'message-right'
  return (
    <div className={`message ${alignment}`}>
        {message.content}
    </div>
  )
}

export default Message