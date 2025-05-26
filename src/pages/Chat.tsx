import React, { useState } from 'react'
import { Navbar } from '../components'

function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! I'm your SmartAssistant. How can I help you today?",
      sender: 'assistant',
      timestamp: 'Today, 10:30 AM'
    }
  ])

  const recentConversations = [
    {
      id: 1,
      title: 'Contract Renewal Inquiry',
      time: 'Today, 10:30 AM'
    },
    {
      id: 2, 
      title: 'Support Hours Question',
      time: 'Yesterday, 2:15 PM'
    },
    {
      id: 3,
      title: 'Employee Handbook Policies',
      time: 'Mar 30, 9:45 AM'
    }
  ]

  const suggestedQuestions = [
    "What is the renewal date for Contract A?",
    "What are our support hours?",
    "Summarize the employee handbook"
  ]

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() === '') return

    // Add user message
    const newMessage = {
      id: messages.length + 1,
      content: message,
      sender: 'user',
      timestamp: 'Now'
    }
    
    setMessages([...messages, newMessage])
    setMessage('')
    
    // Simulate assistant response (would be replaced with actual API call)
    setTimeout(() => {
      const assistantMessage = {
        id: messages.length + 2,
        content: `I'm looking into "${message}" for you.`,
        sender: 'assistant',
        timestamp: 'Now'
      }
      setMessages(prevMessages => [...prevMessages, assistantMessage])
    }, 1000)
  }

  const handleQuestionClick = (question) => {
    setMessage(question)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left sidebar */}
        <div className="w-72 border-r border-gray-200 p-4 flex flex-col bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Conversations</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            {recentConversations.map(convo => (
              <div key={convo.id} className="flex items-center py-3 px-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-800">{convo.title}</p>
                  <p className="text-xs text-gray-500">{convo.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Suggested Questions</h3>
            {suggestedQuestions.map((question, index) => (
              <div 
                key={index} 
                className="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-md mb-2 cursor-pointer text-sm text-gray-800"
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </div>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-grow flex flex-col bg-gray-50">
          <div className="flex-grow overflow-y-auto p-6">
            {messages.map(msg => (
              <div key={msg.id} className={`mb-4 max-w-3xl ${msg.sender === 'user' ? 'ml-auto' : ''}`}>
                <div className={`rounded-lg p-4 ${
                  msg.sender === 'assistant' ? 'bg-white border border-gray-200' : 'bg-purple-600 text-white'
                }`}>
                  <p>{msg.content}</p>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  {msg.sender === 'assistant' && (
                    <div className="flex ml-3">
                      <button className="text-gray-400 hover:text-gray-600 mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017a2 2 0 01-1.865-1.271L7 14m0 0l2.584-3.616a2 2 0 011.646-.828h.146a2 2 0 011.646.828L15 14m-3-3l2.584 2.893M7 14H5m14 0h-2" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Message input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow rounded-l-md bg-gray-50 border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none"
                placeholder="Type your message..."
              />
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-r-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat