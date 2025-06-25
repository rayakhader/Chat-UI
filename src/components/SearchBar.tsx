import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import type { Msg } from './Chat'
import { useTranslation } from 'react-i18next'
import { sendMessage } from '../api/endpoints/chat'
type SearchBarProps = {
    messages: Msg[],
    setMessages: Dispatch<SetStateAction<Msg[]>>
}

function SearchBar({ messages, setMessages }: SearchBarProps) {
    const [prompt, setPrompt] = useState('')
    const [sent, setSent] = useState(false)
    const { t } = useTranslation()
    useEffect(() => {
        if (sent) {
            setTimeout(() => {
                setMessages([...messages, {
                    content: 'auto-replay',
                    sender: 'system'
                }])
                setSent(false)
            }, 1000)
        }
    }, [sent])
    async function handleSend() {
        if (!prompt.trim()) alert(t("Prompt can't be empty"))
        else {
            setPrompt('')
            setSent(true)
            setMessages([...messages, {
                content: prompt,
                sender: 'user'
            }])
            try {
                const response = await sendMessage(prompt);
                console.log('Server replied:', response);
            } catch (err) {
                console.error('Error sending', err);
            }

        }
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (event.key === 'Enter') {
            handleSend()
        }
    }
    return (
        <div className="flex items-center gap-2 mt-3">
            <textarea
                className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                placeholder={t('Please ask what you want...')}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
            />
            <button
                onClick={handleSend}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
                {t('Send')}
            </button>
        </div>
    )
}

export default SearchBar