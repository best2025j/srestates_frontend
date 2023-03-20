## Getting Started

### 1. Clone this template and make your feature-branch pull request against `development` branch only.

```bash
git clone git@github.com:studentrealestates/srestates_frontend.git
cd srestates_frontend
```

### 2. Make change on your feature branch from `origin/development` branch as HEAD.

```bash
git checkout -b <your-feature-branch> origin/development
git branch # just to check current branch
```

### 3. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
npm install
```

### 4. Run the development server

You can start the server using this command:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.js`.
