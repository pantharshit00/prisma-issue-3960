## Reproduction for https://github.com/prisma/prisma/issues/3960

1. Create the database using the [dump](tables_dump_2_February_2019.sql)
2. Start prisma, Deploy the datamodel
3. Run this mutation to create an account:

```grahql
mutation {
  createAccount(data: { email: "test", username: "test" }) {
    id
  }
}

```

4. run node index.js
