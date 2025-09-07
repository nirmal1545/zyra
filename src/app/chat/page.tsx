"use client";

import { useState } from 'react';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

type Message = {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm ZYRA, your AI health assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage: Message = {
        text: "I understand your concern. I'm analyzing your symptoms and will provide a detailed response shortly.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-slate-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-8 min-h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto rounded-t-2xl bg-white/5 backdrop-blur-lg p-6 border border-white/10">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                              ${message.sender === 'user' ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                  {message.sender === 'user' ? (
                    <FaUser className="w-4 h-4 text-white" />
                  ) : (
                    <FaRobot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`rounded-2xl px-4 py-2 max-w-md
                                ${message.sender === 'user' 
                                  ? 'bg-emerald-500 text-white' 
                                  : 'bg-white/10 text-white/90'}`}>
                    {message.text}
                  </div>
                  <span className="text-xs text-white/50 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="bg-white/5 backdrop-blur-lg rounded-b-2xl border border-white/10 p-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-white/5 text-white placeholder-white/50 rounded-lg px-4 py-2 
                       border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-2
                       flex items-center gap-2 transition-colors duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
              <FaPaperPlane className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
