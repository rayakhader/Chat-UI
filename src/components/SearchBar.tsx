import { useState, type Dispatch, type SetStateAction } from 'react'
import type { Msg } from './Chat'
type SearchBarProps = {
    messages: Msg[],
    setMessages: Dispatch<SetStateAction<Msg[]>>
}

function SearchBar({ messages, setMessages }: SearchBarProps) {
    const [prompt, setPrompt] = useState('')
    function handleSend() {
        if (!prompt.trim()) alert("Prompt can't be empty")
        else {
            setPrompt('')
            setMessages([...messages, {
                content: prompt
            }])
        }
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            handleSend()
        }
    }
    return (
        <div className='search-bar'>
            <input className='search-input' type='text' placeholder='Please ask what you want...' value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={handleKeyDown} />
            <button className='send-btn' onClick={handleSend}>
                Send
            </button>
        </div>
    )
}

export default SearchBar