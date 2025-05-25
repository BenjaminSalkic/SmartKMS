import { Routes, Route } from 'react-router-dom'
import { Home, Login, Chat, KnowledgeManagement, Dashboard } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/knowledge-management" element={<KnowledgeManagement />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
