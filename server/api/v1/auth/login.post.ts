import z from 'zod'
import { sign } from 'jsonwebtoken'

const refreshTokens: Record<number, Record<string, any>> = {}
export const SECRET = 'dummy'

export default eventHandler(async (event) => {
    return {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2FyYW1lbCBDYW5keSIsImlhdCI6MTUxNjIzOTAyMn0.UG6jhAPzVG1moI2PDn9dPmHdYuRVju82SrngXPd_g5A'
    }
})