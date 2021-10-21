'use strict';

/**
 * model - Sequelize Model; 
 */
class Collection {
  constructor(model) {
    this.model = model;
  }

  // id - Sequelize identifier
  // we are returning 2 differen things
  // option1 - 1 instance of a model
  // option2 - we return an array of instances of a model
  async read(id, options = {}) {
    // if we want to pass any option to sequelize, we define those as options

    try {
      let records = null;
      if (id) {
        options['where'] = { id: id };
        records = await this.model.findOne(options);
      } else {
        records = await this.model.findAll(options);
      }

      return records;
    } catch(e) {
      return e;
    }
  }

  async create(json) {
    try {

      let record = await this.model.create(json);
      return record;

    } catch(e) {
      return e;
    }
  }

  async update(id, json) {
    try {
        
      let record = await this.model.findOne({ where: { id }});
      let updatedRecord = await record.update(json);

      return updatedRecord;
    } catch(e) {
      return e;
    }
  }

  async delete(id) {
    try {

      let deletedRows = await this.model.destroy({ where: { id }});
      return deletedRows;

    } catch(e) {
      return e;
    }
  }
}

module.exports = Collection;
