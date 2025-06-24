import { useTranslation } from "react-i18next"

function ChatHeader() {
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('Chat with us!')}</h2>
    </div>
  )
}

export default ChatHeader