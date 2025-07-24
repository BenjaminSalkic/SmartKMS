import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, FeatureCard } from '../components'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to SmartAssistant</h1>
          <p className="text-gray-600 mt-2">Your AI-powered company knowledge assistant</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <FeatureCard
            title="Knowledge Management"
            description="Manage your company's knowledge base"
            statValue="24"
            statLabel="Documents"
            icon={
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            }
            decorativeIcon={
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
              </svg>
            }
            linkTo="/knowledge-management"
            linkText="Manage Knowledge"
          />
          
          <FeatureCard
            title="Chat Assistant"
            description="Ask questions about your company data"
            statValue="156"
            statLabel="Conversations"
            icon={
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
              </svg>
            }
            decorativeIcon={
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
              </svg>
            }
            linkTo="/chat"
            linkText="Open Chat"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-1 bg-purple-100 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-purple-500 pl-4">
                <div className="font-medium text-gray-900">Contract A updated</div>
                <div className="text-sm text-gray-500">Today, 10:30 AM</div>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4">
                <div className="font-medium text-gray-900">Support info added</div>
                <div className="text-sm text-gray-500">Yesterday, 2:15 PM</div>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4">
                <div className="font-medium text-gray-900">Contract B reviewed</div>
                <div className="text-sm text-gray-500">Apr 1, 9:45 AM</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-1 bg-purple-100 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Team Activity</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-xs mr-3">
                  BS
                </div>
                <div>
                  <div className="font-medium text-gray-900">Benjamin Salkić</div>
                  <div className="text-sm text-gray-500">Added 3 documents</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-xs mr-3">
                  FD
                </div>
                <div>
                  <div className="font-medium text-gray-900">Filip Dobnikar</div>
                  <div className="text-sm text-gray-500">Updated contract info</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="p-1 bg-purple-100 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Usage Stats</h3>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Queries</span>
                  <span className="text-gray-700">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Documents</span>
                  <span className="text-gray-700">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard