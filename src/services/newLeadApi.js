import axios from "axios";

export const newLeadApi = async (data) => {
    try {
        const url = 'http://localhost:3000/enviar-email';
        const response = await axios.post(url, data);

        return response;
    } catch (err) {
        return err
    }
}