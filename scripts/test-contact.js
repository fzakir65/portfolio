(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Automated Tester',
        email: 'tester@example.com',
        message: 'This is a test message from automated runner.'
      })
    });

    const text = await res.text();
    console.log('HTTP status:', res.status);
    console.log('Response body:');
    console.log(text);
  } catch (err) {
    console.error('Request failed:', err.message || err);
    process.exitCode = 1;
  }
})();
