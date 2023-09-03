import axios from "axios";


export function ProjectsApi() {
    const url = "http://localhost:9000/projects/";


    async function getAll(token: string, id: string) {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
        const { data } = await axios.get(url + id, config);
        return data;
    }

    return { getAll };
}