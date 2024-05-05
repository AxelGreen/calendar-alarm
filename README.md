# Calendar Alarm

## Local development

To start the development server, run the following command:

```bash
npm start
```

## TODO

- [ ] Set up a Progressive Web App

## Step by step

### 1. Create a new React app

```bash
npx create-react-app . --template typescript
```

Clean up the README.md file.

### 2. GitHub pages deployment

Add to the package.json file the following line:

```json
  "homepage": "https://axelgreen.github.io/calendar-alarm",
```

Install the gh-pages package:

```bash
npm install --save gh-pages
```

Add the following scripts to the package.json file:

```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
```

### 3. Add GitHub Actions for automatic deployment

Create the `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 4. Google API Setup

Create a new project in the Google Cloud Console.

Enable the Google Calendar API.

Create OAuth 2.0 credentials.

Required scopes:

- https://www.googleapis.com/auth/calendar.readonly

### 4. Add the Google auth to the app

Install dependencies:

```bash
npm install @react-oauth/google
```

Wrap the app with the GoogleAuthProvider component.

```typescript
// index.tsx

// ...

const clientId = "35295486372-norf8611p9k0pfgev5u2oi3fkkcs3vb5.apps.googleusercontent.com";

// ...

root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);

// ...
```

Add the GoogleLogin component to the app.

```typescript
// App.tsx

// ...

<GoogleLogin
    onSuccess={(response: unknown) => {
        console.log('Logged in successfully:', response);
    }}
    useOneTap
/>

// ...
```