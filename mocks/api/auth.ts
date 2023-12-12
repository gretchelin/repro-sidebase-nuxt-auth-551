import {http, HttpResponse} from 'msw'

const baseUrl = useRuntimeConfig().public?.apiBaseUrl || 'http://localhost:8000/api/v1';

const empty200Response = () => {
    return HttpResponse.json(null, {status: 200});
};

export const auth = [
    http.options(`${baseUrl}/auth/mock/login`, empty200Response),
    http.post(`${baseUrl}/auth/mock/login`, ({request}) => {
        return HttpResponse.json({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2FyYW1lbCBDYW5keSIsImlhdCI6MTUxNjIzOTAyMn0.UG6jhAPzVG1moI2PDn9dPmHdYuRVju82SrngXPd_g5A'
        }, {status: 200});
    }),
    http.options(`${baseUrl}/auth/mock/logout`, empty200Response),
    http.post(`${baseUrl}/auth/mock/logout`, ({request}) => {
        return HttpResponse.json({
            message: 'success'
        })
    }),
    http.options(`${baseUrl}/auth/mock/session`, empty200Response),
    http.get(`${baseUrl}/auth/mock/session`, () => {
        // If authenticated, return a mocked user details
        return HttpResponse.json({
            id: '823963',
            name: 'Nox Sumner',
            email: 'noxsumner@mail.test',
            permissions: []
        });
    }),
]