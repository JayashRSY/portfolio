import axiosClient from './axiosClient';
// import { API_ENDPOINTS } from './apiEndpoints';

export const getProjects = async () => {
        const response = await axiosClient.get<any>(`https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SHEET_ID}/values/projects?key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        return response.data;
};