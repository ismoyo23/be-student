let conn = require('../helper/mysql')

module.exports = {
    GetAuthorModels: function(byfield){
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM author ${byfield}`, function(error,result){
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

    CreateAuthorModels: function(SetData){
        return new Promise((resolve, reject)=>{
            conn.query("INSERT INTO author(name_author, profile_author) VALUES ('"+SetData.name_author+"', '"+SetData.profile_author+"') ", function(error, result){
                  
                if(error) {
                    reject(error)
                }
                let newData= {
                    id: result.insertId,
                    ...SetData
                }
                resolve(newData)
                
          
              })
        })
    },

    UpdateAuthorModels: function(id, setData){
        return new Promise((resolve,reject)=> {
  
        conn.query('UPDATE author SET name_author = "'+setData.name_author+'", profile_author = "'+setData.profile_author+'" WHERE id_author = "'+id+'"', function(error, result){
  
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

    DeleteAuthorModels: function(id){
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM author WHERE id_author= "'+id+'"', function(error,result){
                if(error) {
                    reject(error)
                }
                
                resolve(result)
                
              
            })
        })
    }
}