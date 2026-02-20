'use client';

import { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { ChatMessage } from '../types/types';

export default function ChatContainer() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        'Welcome to the Supreme Court Opinion Assistant. I can help you understand Supreme Court decisions, landmark cases, and constitutional interpretations. What would you like to know?',
    },
    { id: '2', role: 'user', content: 'Sample question?' },
  ]);

  function handleSend(text: string) {
    const newUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
    };

    const assistantReply: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: 'This is placeholder response',
    };

    setMessages((prev) => [...prev, newUserMessage, assistantReply]);
  }

  return (
    <div className="flex flex-col flex-1 bg-background text-white">
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
