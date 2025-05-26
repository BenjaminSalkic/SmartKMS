import React, { useState } from 'react';
import { Navbar, DocumentCard, DocumentList } from '../components';

function KnowledgeManagement() {
  const [viewMode, setViewMode] = useState('grid');
  
  const categories = [
    { id: 'all', name: 'All', count: 6 },
    { id: 'contracts', name: 'Contracts', count: 2 },
    { id: 'support', name: 'Support', count: 1 },
    { id: 'hr', name: 'HR', count: 1 },
    { id: 'general', name: 'General', count: 1 },
    { id: 'products', name: 'Products', count: 1 }
  ];
  
  const documents = [
    {
      id: 1,
      title: 'Company Overview',
      type: 'PDF',
      size: '2.4 MB',
      date: 'Apr 1, 2025',
      category: 'General'
    },
    {
      id: 2,
      title: 'Contract A',
      type: 'DOCX',
      size: '1.8 MB',
      date: 'Mar 28, 2025',
      category: 'Contracts'
    },
    {
      id: 3,
      title: 'Contract B',
      type: 'DOCX',
      size: '2.1 MB',
      date: 'Mar 25, 2025',
      category: 'Contracts'
    },
    {
      id: 4,
      title: 'Support Information',
      type: 'PDF',
      size: '3.5 MB',
      date: 'Mar 20, 2025',
      category: 'Support'
    },
    {
      id: 5,
      title: 'Employee Handbook',
      type: 'PDF',
      size: '4.2 MB',
      date: 'Mar 15, 2025',
      category: 'HR'
    },
    {
      id: 6,
      title: 'Product Specifications',
      type: 'XLSX',
      size: '1.5 MB',
      date: 'Mar 10, 2025',
      category: 'Products'
    }
  ];

  const handleDocumentOptionsClick = (docId: number) => {
    console.log('Options clicked for document:', docId);
    // Implement your options menu logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Knowledge Management</h1>
          <p className="mt-1 text-sm text-gray-600">Upload and manage your company's knowledge base</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id} className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <span className={`text-sm ${category.id === 'all' ? 'font-medium text-purple-600' : 'text-gray-700'}`}>
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded-full">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Search documents..."
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Document
                </button>
                
                <div className="bg-white border border-gray-300 rounded-md flex shadow-sm">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`px-3 py-1 text-sm ${viewMode === 'grid' ? 'bg-gray-100 text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    Grid
                  </button>
                  <button 
                    onClick={() => setViewMode('list')} 
                    className={`px-3 py-1 text-sm ${viewMode === 'list' ? 'bg-gray-100 text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">{documents.length} documents</p>

            {/* Document grid/list view */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    id={doc.id}
                    title={doc.title}
                    type={doc.type}
                    size={doc.size}
                    date={doc.date}
                    category={doc.category}
                    onOptionsClick={handleDocumentOptionsClick}
                  />
                ))}
              </div>
            ) : (
              <DocumentList 
                documents={documents}
                onOptionsClick={handleDocumentOptionsClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeManagement;