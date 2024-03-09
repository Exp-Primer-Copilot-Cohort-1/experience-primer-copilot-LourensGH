// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

### 2. Membuat file `index.js`
```javascript
// Path: index.js
// Import express
const express = require('express');

// Create express app
const app = express();

// Create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

### 3. Membuat file `server.js`
```javascript
// Path: server.js
// Import express
const express = require('express');

// Create express app
const app = express();

// Create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

### 4. Membuat file `app.js`
```javascript
// Path: app.js
// Import express
const express = require('express');

// Create express app
const app = express();

// Create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:300