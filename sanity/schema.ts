import { type SchemaTypeDefinition } from 'sanity';
import  pets from './pets'
import  users from './users'
import products from './products';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pets,users,products],
}


