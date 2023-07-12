module.exports = (sequelize, DataTypes, Model) => {
    class Books extends Model {}

    Books.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coverurl: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publicationyear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberofpages: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedate: {
            type: DataTypes.DATE
        },
        createdby: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updatedby: {
            type: DataTypes.STRING
        },
    },{
        sequelize,
        modelName: 'books'
    });

    return Books;
}