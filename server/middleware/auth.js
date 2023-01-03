const authenticateUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
       return res.status(401).send({ error: "Authentication Invalid" })
    }

    console.log(authHeader)

    next()
}

export default authenticateUser;