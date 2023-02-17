module.exports=(sequelize,DataTypes)=>{
    const Products=sequelize.define("product",{
        title:{
            type:DataTypes.STRING,
            allowsNull:false
        },
        price:{
            type:DataTypes.INTEGER
        },
        description:{
            type:DataTypes.TEXT
        },
        published:{
            type:DataTypes.BOOLEAN
        }
    });
    return Products;
}