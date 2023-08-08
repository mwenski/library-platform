module.exports = (sequelize, DataTypes, Model) => {
    class Loans extends Model {}

    Loans.init({
        loanId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'books',
                key: 'bookId'
            }
        },
        copyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'copies',
                key: 'copyId'
            }
        },
        borrowerId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'borrowers',
                key: 'borrowerId'
            }
        },
        dateBorrowed: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateReturned: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'loans'
    });

    return Loans;
}