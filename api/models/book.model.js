module.exports = (sequelize, DataTypes, Model) => {
    class Books extends Model {}

    Books.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coverUrl: {
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
        publicationYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberOfPages: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize,
        modelName: 'books'
    });

    return Books;
}