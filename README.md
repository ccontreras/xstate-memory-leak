# Steps

- In terminal npm run dev
- Open on chrome: chrome://inspect
- Take a initial snapshot
- Run a load test with Apache Bench: ab -k -n 200 -c 20 http://localhost:3000/
- Take a few snapshots and run GC from the chrome dev tools
- Search for the Interpreter constructor for each snapshot
- Interpreter remains after every GC
- evindence of a clear memory leak!
