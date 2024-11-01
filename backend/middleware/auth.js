import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const { token } = req.headers
    
    // Check if token exists
    if (!token) {
        return res.json({ success: false, message: 'Not authorized login again' })
    }

    // Verify token
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Internal server error' })
    }
}

export default authMiddleware