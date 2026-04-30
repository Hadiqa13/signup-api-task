const express = require('express');
const app = express();
app.use(express.json());

const existingUsers = new Set();

app.post('/api/v1/auth/signup', (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  
  // Validation
  if (!first_name || first_name.length < 2) {
    return res.status(400).json({ errorCode: 'TB_VAL_302', message: 'First name required (min 2 chars)' });
  }
  if (!last_name || last_name.length < 2) {
    return res.status(400).json({ errorCode: 'TB_VAL_302', message: 'Last name required (min 2 chars)' });
  }
  if (!email || !email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ errorCode: 'TB_VAL_301', message: 'Invalid email format' });
  }
  if (!password || password.length < 8) {
    return res.status(400).json({ errorCode: 'TB_VAL_302', message: 'Password must be at least 8 characters' });
  }
  
  // Duplicate check
  if (existingUsers.has(email)) {
    return res.status(409).json({ errorCode: 'TB_VAL_303', message: 'Email already exists' });
  }
  
  // Success
  existingUsers.add(email);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    user_id: Math.random().toString(36).substring(7),
    email: email
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});