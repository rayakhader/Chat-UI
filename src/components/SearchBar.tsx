import { useState, type Dispatch, type SetStateAction } from 'react'
import type { Msg } from './Chat'
import { useTranslation } from 'react-i18next'
type SearchBarProps = {
    messages: Msg[],
    setMessages: Dispatch<SetStateAction<Msg[]>>
}

function SearchBar({ messages, setMessages }: SearchBarProps) {
    const [prompt, setPrompt] = useState('')
    const {t} =useTranslation()
    function handleSend() {
        if (!prompt.trim()) alert(t("Prompt can't be empty"))
        else {
            setPrompt('')
            setMessages([...messages, {
                content: prompt,
            }])
        }
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (event.key === 'Enter') {
            handleSend()
        }
    }
    return (
        <div className='search-bar'>
             <textarea
                className='search-input'
                placeholder={t('Please ask what you want...')}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
            />
            <button className='send-btn' onClick={handleSend}>
                {t('Send')}
            </button>
        </div>
    )
}

export default SearchBar