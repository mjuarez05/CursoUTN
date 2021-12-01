var pool = require("./bd");

async function getMuebles() {
  var query = "select * from muebles order by id desc";
  var rows = await pool.query(query);
  return rows;
}

async function insertMueble(obj) {
  try {
    var query = "insert into muebles set ? ";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getMuebleById(id) {
  var query = "update muebles set ? where d=?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarMuebleById(obj, id) {
  try {
    var query = "update muebles set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteMuebleById(id) {
    var query = "delete from muebles where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getMuebles, insertMueble, getMuebleById, modificarMuebleById, deleteMuebleById};
