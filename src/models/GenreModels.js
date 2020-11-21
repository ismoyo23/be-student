let conn = require('../helper/mysql')

module.exports = {
    GetGenreModels: function(byField){
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM genre${byField}`, function(error,result){
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

    CreateGenreModels: function(SetData){
        return new Promise((resolve, reject)=>{
            conn.query("INSERT INTO genre SET ? ", SetData, function(error, result){
                  
                if(error) {
                    reject(error)
                }
                let newData= {
                    ...SetData
                }
                resolve(newData)
                
          
              })
        })
    },

    UpdateGenreModels: function(id, setData){
        return new Promise((resolve,reject)=> {
        conn.query(`UPDATE genre SET name_genre = '${setData}' WHERE id_genre = '${id}'`, function(error, result){
  
          if(error) {
              reject(error)
          }
          let newData= {
              id: id,
              ...setData
          }
          resolve(newData)
        })
        })
    },

    DeleteGenreModels: function(id){
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM genre WHERE id_genre=?', id, function(error,result){
                if(error) {
                    reject(error)
                }
                
                resolve(result)
                
              
            })
        })
    }
}