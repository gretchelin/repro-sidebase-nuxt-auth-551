import z from 'zod'
import { sign } from 'jsonwebtoken'

const refreshTokens: Record<number, Record<string, any>> = {}
export const SECRET = 'dummy'

export default eventHandler(async (event) => {
    return {
        message: 'success'
    }
})