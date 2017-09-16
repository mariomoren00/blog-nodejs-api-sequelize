const Sequelize = require('sequelize');
const sequelize = new Sequelize('', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Pais = sequelize.define('cat_pais', {
    etiqueta: Sequelize.STRING(100),
    codigo: Sequelize.STRING(5),
    created_by: Sequelize.INTEGER,
    updated_by: Sequelize.INTEGER,
    deleted: Sequelize.BOOLEAN
  }, {
    tableName: 'cat_pais',    
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  
  const Estado = sequelize.define('cat_estado', {
    etiqueta: Sequelize.STRING(100),
    abreviatura: Sequelize.STRING(10),
    created_by: Sequelize.INTEGER,
    updated_by: Sequelize.INTEGER,
    deleted: Sequelize.BOOLEAN
  }, {
    tableName: 'cat_estado',
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });

  const Municipio = sequelize.define('cat_municipio', {
    etiqueta: Sequelize.STRING(100),
    abreviatura: Sequelize.STRING(10),
    created_by: Sequelize.INTEGER,
    updated_by: Sequelize.INTEGER,
    deleted: Sequelize.BOOLEAN
  }, {
    tableName: 'cat_municipio',
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  
  Pais.hasMany(Estado, { foreignKey: 'id_pais'} );
  Estado.belongsTo(Pais, { foreignKey: 'id_pais'} );
  
  Estado.hasMany(Municipio, { foreignKey: 'id_estado'} );
  Municipio.belongsTo(Estado, { foreignKey: 'id_estado'} );
  

  /*
  Pais.findAll({ include: [ Estado ], where: { id: 1 } }).then(pais => {
    console.log(JSON.stringify(pais));
  });
  */

  /*
  Pais.findAll({ include: [ Estado ], where: {id: 1}}).then(pais => {
    console.log(JSON.stringify(pais[0].cat_estados));
  });
  */

  /*
  Estado.findAll({ attributes: ['id', 'etiqueta'], include: [ Pais ], where: { id_pais: 1, deleted: 0 } }).then(estados => {
      console.log(JSON.stringify(estados));
  });
  */

  /*
  Estado.findAll({ include: [ Pais ], where: { id_pais: 1, deleted: 0 } }).then(estados => {
    console.log(JSON.stringify(estados));
  });
  */

  /*
  Estado.findAll({ where: { id_pais: 1, deleted: 0 } }).then(estados => {
    console.log(JSON.stringify(estados));
  });
  */

  /*Municipio.findAll({ include: [ Estado ] , where: { id: 1 } }).then(municipio => {
    console.log(JSON.stringify(municipio));
  });*/