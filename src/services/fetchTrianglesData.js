import axios from "axios";

export const fetchTrianglesData = async (coneParameters) => {
    try {
        const response = await axios.post('https://triangulation-calc-54d134bfc721.herokuapp.com/triangulate-cone', coneParameters);
        return response.data.triangles;
    } catch (error) {
        console.error('Error fetching triangles:', error);
    }     
}