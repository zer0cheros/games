import mysql from 'serverless-mysql'

type query = {
    sql: string
}

const Query = async({sql} :query) => {
    const db = mysql({
        config:({
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD 
        })  
    })
    try {
        const results = await db.query(sql)
        db.end()
        return results
    } catch (error) {
        return error
    }
    
    
}

export default Query