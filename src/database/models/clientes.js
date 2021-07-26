const {Model, DataTypes} = require('sequelize');

class Clientes extends Model {
    
    static init(sequelize){
        super.init({
            primeiroNome: DataTypes.STRING,
            ultimoNome: DataTypes.STRING,
            email:DataTypes.STRING,             

        },{
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Telefones, {foreignKey: 'userId', as: 'telefones'})
    }
}


module.exports = Clientes;
