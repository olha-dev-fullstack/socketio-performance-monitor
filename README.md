# Performance Monitoring with Socket.io

This is a small app which shows performance monitoring data for your machine. nodeClient uses node os module to check and calculate performance and passes data to the server through socket connectio. Such connection is also established between server and react-client which allows to show and update data on frontend in real time.

## How to run the app

1. Clone the repo
```bash
git clone https://github.com/olha-dev-fullstack/socketio-performance-monitor.git
cd socketio-performance-monitor
```
2. Run server
```bash
cd server
npm start
```
3. Run nodeClient
```bash
cd nodeClient
npm start
```
4. Run Frontend
```bash
cd react-client
npm start
```
When prompted to run on another post (because post `3000` is taken) choose `Y`. Frontend will run on `localhost:3001`.