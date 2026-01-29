# SmartKMS - Knowledge Management System

> Developed for LIIS Laboratory

---

## Overview

**SmartKMS** is an intelligent knowledge management system designed to centralize and organize communication data from multiple collaboration platforms. When integrated with backend components, it aggregates messages, files, and conversations from Slack, Microsoft Teams, and Discord channels, storing them in a centralized database for easy access and intelligent querying.

## Key Features

| Category | Feature | Description |
|----------|---------|-------------|
| **Data Aggregation** | Multi-Platform Integration | Connects to Slack, Microsoft Teams, and Discord |
| **Data Aggregation** | Message Archiving | Automatically saves all messages and conversations |
| **Data Aggregation** | File Management | Stores and indexes shared files from all platforms |
| **Intelligence** | AI Assistant | Intelligent search and retrieval of stored information |
| **Intelligence** | Contact Discovery | Find and retrieve contact information quickly |
| **Intelligence** | Conversation Search | Query historical conversations and context |
| **Intelligence** | Smart Recommendations | AI-powered insights from organizational knowledge |
| **Interface** | Dashboard | Visual overview of knowledge base statistics |
| **Interface** | Chat Interface | Interactive AI assistant for querying data |
| **Interface** | Knowledge Browser | Browse and search through stored documents |

## System Architecture

SmartKMS is designed as a frontend interface that works in conjunction with:
- **Data Collectors**: Services that integrate with Slack, Teams, and Discord APIs
- **Database Layer**: Centralized storage for messages, files, and metadata
- **AI Engine**: Natural language processing for intelligent queries and responses
- **API Gateway**: Backend services that connect the frontend to data sources

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Containerization**: Docker with Docker Compose

## Getting Started

### Prerequisites
- Node.js (LTS version)
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:BenjaminSalkic/SmartKMS.git
   cd SmartKMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Docker Deployment

Run the application using Docker:

```bash
docker-compose up
```

The containerized application will be accessible at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## Project Structure

```
SmartKMS/
├── src/
│   ├── pages/              # Application pages
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Chat.tsx
│   │   ├── Dashboard.tsx
│   │   └── KnowledgeManagement.tsx
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── DocumentCard.tsx
│   │   ├── DocumentList.tsx
│   │   └── FeatureCard.tsx
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── Dockerfile             # Container configuration
├── docker-compose.yaml    # Docker orchestration
└── vite.config.ts         # Vite configuration
```

## Use Cases

- **Enterprise Knowledge Base**: Centralize all organizational communications
- **Information Retrieval**: Quickly find past conversations and decisions
- **Onboarding**: Help new team members access historical context
- **Compliance**: Maintain searchable archives of communications
- **AI-Assisted Search**: Natural language queries across all platforms

## Integration

This frontend component is designed to work with backend services that:
1. Connect to Slack, Teams, and Discord APIs
2. Process and store messages in a database
3. Provide AI-powered search and retrieval endpoints
4. Handle authentication and authorization

## Development

Built with modern web technologies for optimal performance and developer experience:
- **React 19**: Latest React features and improvements
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast HMR and build times
- **Tailwind CSS**: Utility-first styling

## License

Developed for LIIS Laboratory.

---

