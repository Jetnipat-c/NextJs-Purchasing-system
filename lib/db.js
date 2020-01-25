import { createPool } from 'mariadb';
const DB = (props) =>{
    const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '0123456',
    connectionLimit: 5,
    database: 'testdb'
});
const testredux= props.info;
pool.getConnection()
    .then(conn => {
        // ---------------------------------------------------------------------------
        console.log("Connected!");
        conn.query('CREATE TABLE animals (' +
            'id MEDIUMINT NOT NULL AUTO_INCREMENT,' +
            'name VARCHAR(30) NOT NULL,' +
            'PRIMARY KEY (id))');
        conn.query('INSERT INTO animals(name) value (?)', ['sea lions'])
        // ---------------------------------------------------------------------------
            .then(res => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
                conn.release(); // release to pool
                console.log(res);
            })
            .catch(err => {
                conn.release(); // release to pool
                console.log("release to pool!");
            })

    }).catch(err => {
        //not connected
        console.log("Not Connected!" + err.message);
    });
    return (
        <div></div>
    )
}
export default DB;