# Signup API Endpoint

A RESTful signup API endpoint with validation and Travelbase-style error handling.

# Test 1: Valid Signup (Success)
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/auth/signup" -Method Post -ContentType "application/json" -Body '{"first_name":"Michael","last_name":"Awoniran","email":"test@test.com","password":"Strong123"}'

# Test 2: Missing last_name (Error)
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/auth/signup" -Method Post -ContentType "application/json" -Body '{"first_name":"Michael","email":"test2@test.com","password":"Strong123"}'

# Test 3: Invalid email (Error)
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/auth/signup" -Method Post -ContentType "application/json" -Body '{"first_name":"Michael","last_name":"Awoniran","email":"not-an-email","password":"Strong123"}'

# Test 4: Weak password (Error)
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/auth/signup" -Method Post -ContentType "application/json" -Body '{"first_name":"Michael","last_name":"Awoniran","email":"test4@test.com","password":"weak"}'

#  Test 5: Duplicate email (Error)
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/auth/signup" -Method Post -ContentType "application/json" -Body '{"first_name":"John","last_name":"Doe","email":"test@test.com","password":"Another123"}'

