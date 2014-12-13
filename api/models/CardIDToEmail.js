/**
* CardIDToEmail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    card_id:
    {
      type: "string",
      primaryKey: true,
      required: true
    },
    email:
    {
      model: "person", 
      type: "string",
      required: true,
      email: true
    }
  }
};

