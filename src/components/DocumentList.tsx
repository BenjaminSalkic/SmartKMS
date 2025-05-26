import React from 'react';

interface DocumentListProps {
  documents: Array<{
    id: number;
    title: string;
    type: string;
    size: string;
    date: string;
    category: string;
  }>;
  onOptionsClick?: (id: number) => void;
}

const DocumentList = ({
  documents,
  onOptionsClick
}: DocumentListProps) => {
  
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return (
          <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case 'DOCX':
        return (
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case 'XLSX':
        return (
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const handleOptionsClick = (id: number) => {
    if (onOptionsClick) {
      onOptionsClick(id);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {documents.map((doc) => (
          <li key={doc.id} className="px-5 py-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {getFileIcon(doc.type)}
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{doc.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">{doc.type} • {doc.size}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-xs text-gray-500">{doc.date}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-xs text-gray-500">{doc.category}</span>
                  </div>
                </div>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600" 
                onClick={() => handleOptionsClick(doc.id)}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;