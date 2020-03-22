import { Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';

@Resolver(of => Recipe)
export class BaseResolver {
	@Query()
	async test(): Promise<Recipe> {
		return {
			id: '',
			title: 'Test recipe',
			description: 'A test recipe',
			ingredients: [],
			creationDate: new Date(),
		};
	}
}
