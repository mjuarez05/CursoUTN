var pool = require('./bd');

async function registraUsuario(obj) {
    try {
        var query = "insert into usuarios set ?";
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}
