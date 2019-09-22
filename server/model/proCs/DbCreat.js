/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DbCreat', {
    code: {
      field: 'code',
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      field: 'sex',
      type: DataTypes.STRING,
      allowNull: true
    },
    year: {
      field: 'year',
      type: DataTypes.STRING,
      allowNull: true
    },
    smToke: {
      field: 'sm_toke',
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'db_creat',
    timestamps: false,
    freezeTableName: true
  });
};
