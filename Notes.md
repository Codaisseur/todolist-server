## Set up relations:

1. Create the new column with foreign key.

- For this the best way is a new migration:

```js
await queryInterface.addColumn("todoLists", "ownerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
```

2. Connect the models.

```js
// user.js
user.hasMany(models.todoList, { foreignKey: "ownerId" });

// todolist.js
todoList.belongsTo(models.user, { foreignKey: "ownerId" });
```

## Add a 3rd model (todoItems):

- Generate the model (model:generate) => A model
  => a migration

- TEST => db:migrate => look at the tables (do they make sense?)

### DONE

Connect this model to todoList:

- Set up an association:

In a migration (maybe a new or we can reuse the one we had)

- foreignKey => todoListId

In the models:

- belongsTo, hasMany
