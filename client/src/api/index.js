import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL ?? 'http://localhost:5000'

const api = axios.create({
    baseURL: `${serverUrl}/api`,
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = function () {
    console.log(`serverUrl: ${serverUrl}`)
    return api.get(`/movies`)
}
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
