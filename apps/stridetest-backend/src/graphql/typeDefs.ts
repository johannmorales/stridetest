import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeTypeDefs} from '@graphql-tools/merge';
import {DocumentNode} from 'graphql';

// Load all .graphql files from the schemas directory
const typesArray: DocumentNode[] = loadFilesSync(`**/*/schemas/**/*.gql`);

// Merge all loaded schema files into a single typeDefs object
export const typeDefs = mergeTypeDefs(typesArray);
