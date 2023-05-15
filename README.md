## Development dependencies
```npm i -D typescript jest ts-jest @types/jest ts-node```

## To add a javascript configuration file for jest
```npx ts-jest config:init```

But since we are using `TS` here we won't need to run this. Instead need to create a `TS configuration` file as `jest.config.ts`.

- `BeforeAll` and `AfterAll` are generally used for **integration tests**. For Example: Connecting to a database
- jest hooks's context is within the describe. 
- its a good practice to put our hooks in the describes