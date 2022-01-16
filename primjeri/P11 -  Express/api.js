module.exports = (express, pool) => {
  const apiRouter = express.Router();

  apiRouter.get('/', (req, res) => {
    res.json({ message: 'Dobro dosli na nas API!' });
  });

  apiRouter
    .route('/users')
    .get(async (req, res) => {
      try {
        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM users');
        conn.release();
        res.json({ status: 'OK', users: rows });
      } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 'Error with query' });
      }
    })
    .post(async (req, res) => {
      const { username, password, email } = req.body;
      const user = {
        username,
        password,
        email,
      };

      try {
        const conn = await pool.getConnection();
        const q = await conn.query('INSERT INTO users SET ?', user);
        conn.release();
        res.json({ status: 'OK', insertId: q.insertId });
      } catch (e) {
        console.log(e);
        res.json({ status: 'NOT OK' });
      }
    })
    .put(async (req, res) => {
      const { username, password, email } = req.body;
      const user = {
        username,
        password,
        email,
      };

      console.log(req.body);

      try {
        const conn = await pool.getConnection();
        const q = await conn.query('UPDATE users SET ? WHERE id = ?', [
          user,
          req.body.id,
        ]);
        conn.release();
        res.json({ status: 'OK', changedRows: q.changedRows });
        console.log(q);
      } catch (e) {
        res.json({ status: 'NOT OK' });
      }
    })
    .delete(async (req, res) => {
      res.status(101).json({ status: 'Body in delete request' });
    });

  apiRouter
    .route('/users/:id')
    .get(async (req, res) => {
      try {
        let conn = await pool.getConnection();
        let rows = await conn.query(
          'SELECT * FROM users WHERE id=?',
          req.params.id
        );
        conn.release();
        res.json({ status: 'OK', user: rows[0] });
      } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 'Error with query' });
      }
    })
    .delete(async (req, res) => {
      try {
        let conn = await pool.getConnection();
        //Body u DELETE requestu nije po REST specifikaciji
        let q = await conn.query(
          'DELETE FROM users WHERE id = ?',
          req.params.id
        );
        conn.release();
        res.json({ status: 'OK', affectedRows: q.affectedRows });
      } catch (e) {
        res.status(500).json({ status: 'NOT OK' });
      }
    });

  return apiRouter;
};
