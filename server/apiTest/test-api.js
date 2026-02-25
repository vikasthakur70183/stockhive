const BASE_URL = "http://localhost:5001/api/auth";

async function testRegister() {
  console.log("\n=== Testing REGISTER ===");

  // Test 1: Valid registration
  console.log("\n1. Valid registration:");
  const registerRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    }),
  });
  const registerData = await registerRes.json();
  console.log("Status:", registerRes.status);
  console.log("Response:", JSON.stringify(registerData, null, 2));

  // Test 2: Duplicate email
  console.log("\n2. Duplicate email:");
  const duplicateRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    }),
  });
  const duplicateData = await duplicateRes.json();
  console.log("Status:", duplicateRes.status);
  console.log("Response:", JSON.stringify(duplicateData, null, 2));

  // Test 3: Invalid email format
  console.log("\n3. Invalid email format:");
  const invalidEmailRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John",
      email: "invalid-email",
      password: "password123",
    }),
  });
  const invalidEmailData = await invalidEmailRes.json();
  console.log("Status:", invalidEmailRes.status);
  console.log("Response:", JSON.stringify(invalidEmailData, null, 2));

  // Test 4: Short password
  console.log("\n4. Short password:");
  const shortPwdRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John",
      email: "john2@test.com",
      password: "123",
    }),
  });
  const shortPwdData = await shortPwdRes.json();
  console.log("Status:", shortPwdRes.status);
  console.log("Response:", JSON.stringify(shortPwdData, null, 2));

  // Test 5: Missing fields
  console.log("\n5. Missing fields:");
  const missingRes = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John",
    }),
  });
  const missingData = await missingRes.json();
  console.log("Status:", missingRes.status);
  console.log("Response:", JSON.stringify(missingData, null, 2));
}

async function testLogin() {
  console.log("\n\n=== Testing LOGIN ===");

  // Test 1: Valid login
  console.log("\n1. Valid login:");
  const loginRes = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "john@example.com",
      password: "password123",
    }),
  });
  const loginData = await loginRes.json();
  console.log("Status:", loginRes.status);
  console.log("Response:", JSON.stringify(loginData, null, 2));

  // Test 2: Wrong password
  console.log("\n2. Wrong password:");
  const wrongPwdRes = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "john@example.com",
      password: "wrongpassword",
    }),
  });
  const wrongPwdData = await wrongPwdRes.json();
  console.log("Status:", wrongPwdRes.status);
  console.log("Response:", JSON.stringify(wrongPwdData, null, 2));

  // Test 3: Non-existent user
  console.log("\n3. Non-existent user:");
  const notFoundRes = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "notfound@example.com",
      password: "password123",
    }),
  });
  const notFoundData = await notFoundRes.json();
  console.log("Status:", notFoundRes.status);
  console.log("Response:", JSON.stringify(notFoundData, null, 2));

  // Test 4: Missing fields
  console.log("\n4. Missing fields:");
  const missingLoginRes = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "john@example.com",
    }),
  });
  const missingLoginData = await missingLoginRes.json();
  console.log("Status:", missingLoginRes.status);
  console.log("Response:", JSON.stringify(missingLoginData, null, 2));
}

async function runTests() {
  try {
    await testRegister();
    await testLogin();
    console.log("\n\n✅ All tests completed!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

runTests();
