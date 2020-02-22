import app from "./app";
const PORT = 5893;

const handleListening = () =>
  console.log(`Server is Opened: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
