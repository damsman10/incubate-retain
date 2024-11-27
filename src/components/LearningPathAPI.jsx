import axios from "axios"

const LearningPathAPI = async () => {
    try {
        const response = await axios.get ("https://apiincubate-production.up.railway.app/api/education");
        return response.data;
    } catch (error) {
        console.error ("Error fetching data:", error)
    }
}

export default LearningPathAPI