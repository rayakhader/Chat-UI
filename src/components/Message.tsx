import type { Msg } from './Chat'

type MessageProps = {
  message: Msg,
  index: number
}

function Message({ message, index }: MessageProps) {
  const alignment = index % 2 === 0 ? 'message-left' : 'message-right';
  const dateTime = new Date();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  return (
    <div className='full-message'>
      <div className={`message ${alignment}`}>
        {message.content}
      </div>
      <span className='message-time'>{time}</span>
    </div>
  )
}

export default Message
