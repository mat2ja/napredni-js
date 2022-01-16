

module.exports=function(express, pool, jwt, secret){


    let authRouter = express.Router();

    authRouter.post('/', async function(req,res){



        try {

            console.log(req.body);

            let conn = await pool.getConnection();
            let rows = await conn.query('SELECT * FROM users WHERE username=?', req.body.username);
            conn.release();

            if (rows.length>0 && rows[0].password==req.body.password){

                const token = jwt.sign({
                    username:rows[0].username,
                    email:rows[0].email,
                    level:rows[0].level
                }, secret, {
                    expiresIn:3600
                });

                res.json({ status: 200, token:token, user:rows[0]});

            } else if (rows.length>0){

                res.json({ status: 'NOT OK', description:'Wrong password' });

            } else {

                res.json({ status: 'NOT OK', description:'Username doesnt exist' });

            }


        } catch (e){
            console.log(e);
            return res.json({"code" : 100, "status" : "Error with query"});

        }



    });


    return authRouter;

};
