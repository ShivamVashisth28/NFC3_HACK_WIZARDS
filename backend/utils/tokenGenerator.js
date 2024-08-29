import jwt from "jsonwebtoken"

export const tokenGenerator = (username) => {
    const token = jwt.sign(username, process.env.TOKEN_SECRET)
    return token
}

export const tokenDecoder = (token) => {
    const username = jwt.verify(token, process.env.TOKEN_SECRET)
    return username
} 

