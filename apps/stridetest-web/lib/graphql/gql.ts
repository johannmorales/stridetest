/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getTasksPage {\n    getTasksPage(pageNumber: 0, pageSize: 4) {\n      content {\n        id\n        description\n        createdAt\n      }\n    }\n  }\n": types.GetTasksPageDocument,
    "\n  query getCustomersPage {\n    getCustomersCount\n    getCustomersPage(pageNumber: 0, pageSize: 3) {\n      content {\n        id\n        name\n        email\n        photo\n      }\n    }\n  }\n": types.GetCustomersPageDocument,
    "\n  query getDeals {\n    getDealsCount\n    getDealsPage(pageNumber: 0, pageSize: 4) {\n      content {\n        id\n        address\n        price\n        state\n        city\n        date\n      }\n    }\n  }\n": types.GetDealsDocument,
    "\n  query getDealsPage($lastEvaluatedKey: String) {\n    getDealsPage(\n      pageNumber: 0\n      pageSize: 7\n      lastEvaluatedKey: $lastEvaluatedKey\n    ) {\n      size\n      content {\n        id\n        address\n        price\n        state\n        city\n        date\n        zipCode\n        area\n        status\n      }\n      lastEvaluatedKey\n      numberOfElements\n      totalPages\n    }\n  }\n": types.GetDealsPageDocument,
    "\n  query getDealsCount {\n    getDealsCount\n  }\n": types.GetDealsCountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTasksPage {\n    getTasksPage(pageNumber: 0, pageSize: 4) {\n      content {\n        id\n        description\n        createdAt\n      }\n    }\n  }\n"): typeof import('./graphql').GetTasksPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomersPage {\n    getCustomersCount\n    getCustomersPage(pageNumber: 0, pageSize: 3) {\n      content {\n        id\n        name\n        email\n        photo\n      }\n    }\n  }\n"): typeof import('./graphql').GetCustomersPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getDeals {\n    getDealsCount\n    getDealsPage(pageNumber: 0, pageSize: 4) {\n      content {\n        id\n        address\n        price\n        state\n        city\n        date\n      }\n    }\n  }\n"): typeof import('./graphql').GetDealsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getDealsPage($lastEvaluatedKey: String) {\n    getDealsPage(\n      pageNumber: 0\n      pageSize: 7\n      lastEvaluatedKey: $lastEvaluatedKey\n    ) {\n      size\n      content {\n        id\n        address\n        price\n        state\n        city\n        date\n        zipCode\n        area\n        status\n      }\n      lastEvaluatedKey\n      numberOfElements\n      totalPages\n    }\n  }\n"): typeof import('./graphql').GetDealsPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getDealsCount {\n    getDealsCount\n  }\n"): typeof import('./graphql').GetDealsCountDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
