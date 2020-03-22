This is a copy of the [NestJS example 23-graphql-code-first](https://github.com/nestjs/nest/tree/master/sample/23-graphql-code-first).  
I just added a resolver `BaseResolver` in `src/recipes/base-class.resolver.ts` and `RecipesResolver` inherits from it.

The Query defined in `BaseResolver` is not added to the schema.
