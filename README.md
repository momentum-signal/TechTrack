## How to run this project on your local machine

### 1. Download Node.js

<a href="https://nodejs.org/en/download/package-manager" target="_blank">![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)</a>

### 2. Check Node.js version

```bash
node -v
```

### 3. Clone the Repository

```bash
git clone https://github.com/momentum-signal/tech_track
```

### 3. Navigate to the Project Directory

```bash
cd tech_track
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Configure Environment Variables (Optional for now)

Check if the project has an `.env.example` or `.env.local` file in the root folder. If it doesn't:

Create a new .env.local file in the root directory.
Copy the content from .env.example into .env.local and update the variables with the required values (e.g., API keys, database credentials, etc.).

### 6. Start the Development Server

```bash
npm run dev
```

### 7. Open the Application

```bash
http://localhost:3000
```
