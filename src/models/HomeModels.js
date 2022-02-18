let conn = require('../helper/mysql')

module.exports = {
    GetHomeModels: function(date_from, date_to){
        return new Promise((resolve, reject) => {
            conn.query(`SELECT jurusan.nama_jurusan, kelas.nama_kelas, reportabsence.status, reportabsence.nama, reportabsence.tanggal FROM reportabsence INNER JOIN jurusan ON jurusan.id_jurusan = reportabsence.id_jurusan INNER JOIN kelas ON kelas.id_kelas = reportabsence.id_kelas WHERE reportabsence.tanggal BETWEEN '${date_from}' AND '${date_to}'`, function(error,result){
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

    ReportDataModels: function(date_from, date_to, by){
        return new Promise((resolve, reject) => {
            conn.query(`SELECT jurusan.nama_jurusan, kelas.nama_kelas, reportabsence.status, reportabsence.tanggal, COUNT(*) as count FROM reportabsence INNER JOIN jurusan ON jurusan.id_jurusan = reportabsence.id_jurusan INNER JOIN kelas ON kelas.id_kelas = reportabsence.id_kelas WHERE reportabsence.tanggal BETWEEN '${date_from}' AND '${date_to}' GROUP BY ${by}`, function(error,result){
                if(error){
                    reject(error)
                }
                resolve(result)
            })
        })
    },

}