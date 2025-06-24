import { useTranslation } from 'react-i18next';
import type { Msg } from './Chat'
import { motion } from 'framer-motion'

type MessageProps = {
  message: Msg,
  index: number,
  onReact: (index: number, reaction: 'like' | 'dislike') => void
}

function Message({ message, index, onReact }: MessageProps) {
  const alignment = message.sender === 'user' ? 'message-left' : 'message-right';
  const isAnswer = message.sender === 'system';
  const { t } = useTranslation();
  const dateTime = new Date();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`flex items-center gap-1 ${alignment === 'message-left' ? 'justify-end' : ''}`}>
        <div className={`max-w-[70%] rounded-2xl px-4 py-2 break-words shadow-sm ${alignment === 'message-left'
            ? 'bg-gray-100 text-gray-800 border border-gray-200'
            : 'bg-orange-500 text-white border border-orange-500'
          }`}>
          {message.isTranslated ? t(message.content) : message.content}
        </div>
        {message.reaction && (
          <span className="ml-2">{message.reaction === 'like' ? '👍' : '👎'}</span>
        )}
        {isAnswer && !message.reaction && (
          <div className="flex gap-1 mt-1 ml-4">
            <button
              onClick={() => onReact(index, 'like')}
              className="text-green-500 hover:text-green-700 transition"
              aria-label="Like"
            >
              👍
            </button>
            <button
              onClick={() => onReact(index, 'dislike')}
              className="text-red-500 hover:text-red-700 transition"
              aria-label="Dislike"
            >
              👎
            </button>
          </div>
        )}
        <span className="text-xs font-medium">
          {time}
        </span>

      </div>
    </motion.div>

  )
}

export default Message
