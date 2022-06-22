const db = require("../dbConfig/init");

class Telegraph {
  constructor(data) {
    this.title = data.title;
    this.pseudonym = data.pseudonym;
    this.body = data.body;
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = await db.query("SELECT * FROM telegraphs WHERE id=$1", [
          id,
        ]);
        const telegraph = query.rows[0];
        resolve(telegraph);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const telegraphsData = await db.query("SELECT * FROM telegraphs");
        const telegraphsArr = telegraphsData.rows.map(
          (data) => new Telegraph(data)
        );
        resolve(telegraphsArr);
      } catch (err) {
        reject(err.message);
      }
    });
  }
  static create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, pseudonym, body } = data;
        const telegraphsData = await db.query(
          "INSERT INTO telegraphs (title, pseudonym, body) VALUES ($1,$2,$3) RETURNING *",
          [title, pseudonym, body]
        );

        resolve(telegraphsData.rows.map((d) => new Telegraph(d)));
      } catch (err) {
        reject(err.message);
      }
    });
  }
}

module.exports = Telegraph;
