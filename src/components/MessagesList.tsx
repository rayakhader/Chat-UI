import { AnimatePresence } from 'framer-motion'
import type { Msg } from './Chat'
import Message from './Message'
type MessagesListProps = {
  messages: Msg[],
  onReact: (index: number, reaction: 'like' | 'dislike') => void
}
function MessagesList({ messages, onReact }: MessagesListProps) {
  return (
    <div className="flex flex-col gap-2 overflow-auto h-80 p-2 rounded-lg border border-gray-100 bg-gray-50">
      <AnimatePresence>
        {
          messages.map((msg, index) => {
            return <Message key={index} message={msg} index={index} onReact={onReact} />
          })
        }
      </AnimatePresence>
    </div>
  )
}

export default MessagesList