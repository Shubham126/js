import axios from "axios";

axios.get("https://api.example.com/users")
  .then(response => console.log(response.data));