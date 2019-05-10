import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 8ba51d2d2cf8188d6db33ac5cb6f6b07dca5fa70c0550964c6000709f76d464e'
    }
})