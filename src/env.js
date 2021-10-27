const process = {
  env: {
    NODE_ENV: "development",
    // Local Server
    SERVICE_URL:"http://127.0.0.1:8000/api",
    // Heroku server
    // SERVICE_URL: ""
  }
}

export default process;