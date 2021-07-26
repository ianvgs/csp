const {Model, DataTypes, Sequelize} = require('sequelize');

class Telefones extends Model {
    
    static init(sequelize){
        super.init({
            
            telefone0: DataTypes.INTEGER,   
            telefone1: DataTypes.INTEGER, 
            telefone2: DataTypes.INTEGER, 
            telefone3: DataTypes.INTEGER, 
            telefone4: DataTypes.INTEGER, 
            telefone5: DataTypes.INTEGER, 
            telefone6: DataTypes.INTEGER,           

        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Clientes, {foreignKey: 'userId', as: 'dono'})
    }
}


module.exports = Telefones;
