/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
};

export type CustomerPage = {
  __typename?: 'CustomerPage';
  content?: Maybe<Array<Maybe<Customer>>>;
  lastEvaluatedKey?: Maybe<Scalars['String']['output']>;
  numberOfElements?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  totalElemets?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Deal = {
  __typename?: 'Deal';
  address?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['Float']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  people?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type DealPage = {
  __typename?: 'DealPage';
  content?: Maybe<Array<Maybe<Deal>>>;
  lastEvaluatedKey?: Maybe<Scalars['String']['output']>;
  numberOfElements?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  totalElements?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer?: Maybe<Scalars['Boolean']['output']>;
  createDeal?: Maybe<Scalars['Boolean']['output']>;
  createTask?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateCustomerArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoyo: Scalars['String']['input'];
};


export type MutationCreateDealArgs = {
  address: Scalars['String']['input'];
  area?: InputMaybe<Scalars['Float']['input']>;
  city: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  people?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  state: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};


export type MutationCreateTaskArgs = {
  description: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getCustomer?: Maybe<Customer>;
  getCustomersCount?: Maybe<Scalars['Int']['output']>;
  getCustomersPage?: Maybe<CustomerPage>;
  getDeal?: Maybe<Deal>;
  getDealsCount?: Maybe<Scalars['Int']['output']>;
  getDealsPage?: Maybe<DealPage>;
  getTask?: Maybe<Task>;
  getTasksPage?: Maybe<TaskPage>;
};


export type QueryGetCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCustomersPageArgs = {
  pageNumber: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


export type QueryGetDealArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDealsPageArgs = {
  lastEvaluatedKey?: InputMaybe<Scalars['String']['input']>;
  pageNumber: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};


export type QueryGetTaskArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTasksPageArgs = {
  pageNumber: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export type Task = {
  __typename?: 'Task';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type TaskPage = {
  __typename?: 'TaskPage';
  content?: Maybe<Array<Maybe<Task>>>;
  lastEvaluatedKey?: Maybe<Scalars['String']['output']>;
  numberOfElements?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type GetTasksPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksPageQuery = { __typename?: 'Query', getTasksPage?: { __typename?: 'TaskPage', content?: Array<{ __typename?: 'Task', id?: string | null, description?: string | null, createdAt?: string | null } | null> | null } | null };

export type GetCustomersPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersPageQuery = { __typename?: 'Query', getCustomersCount?: number | null, getCustomersPage?: { __typename?: 'CustomerPage', content?: Array<{ __typename?: 'Customer', id?: string | null, name?: string | null, email?: string | null, photo?: string | null } | null> | null } | null };

export type GetDealsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDealsQuery = { __typename?: 'Query', getDealsCount?: number | null, getDealsPage?: { __typename?: 'DealPage', content?: Array<{ __typename?: 'Deal', id: string, address?: string | null, price?: number | null, state?: string | null, city?: string | null, date?: string | null } | null> | null } | null };

export type GetDealsPageQueryVariables = Exact<{
  lastEvaluatedKey?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetDealsPageQuery = { __typename?: 'Query', getDealsPage?: { __typename?: 'DealPage', size?: number | null, lastEvaluatedKey?: string | null, numberOfElements?: number | null, totalPages?: number | null, content?: Array<{ __typename?: 'Deal', id: string, address?: string | null, price?: number | null, state?: string | null, city?: string | null, date?: string | null, zipCode?: string | null, area?: number | null, status?: string | null } | null> | null } | null };

export type GetDealsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDealsCountQuery = { __typename?: 'Query', getDealsCount?: number | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetTasksPageDocument = new TypedDocumentString(`
    query getTasksPage {
  getTasksPage(pageNumber: 0, pageSize: 4) {
    content {
      id
      description
      createdAt
    }
  }
}
    `) as unknown as TypedDocumentString<GetTasksPageQuery, GetTasksPageQueryVariables>;
export const GetCustomersPageDocument = new TypedDocumentString(`
    query getCustomersPage {
  getCustomersCount
  getCustomersPage(pageNumber: 0, pageSize: 3) {
    content {
      id
      name
      email
      photo
    }
  }
}
    `) as unknown as TypedDocumentString<GetCustomersPageQuery, GetCustomersPageQueryVariables>;
export const GetDealsDocument = new TypedDocumentString(`
    query getDeals {
  getDealsCount
  getDealsPage(pageNumber: 0, pageSize: 4) {
    content {
      id
      address
      price
      state
      city
      date
    }
  }
}
    `) as unknown as TypedDocumentString<GetDealsQuery, GetDealsQueryVariables>;
export const GetDealsPageDocument = new TypedDocumentString(`
    query getDealsPage($lastEvaluatedKey: String) {
  getDealsPage(pageNumber: 0, pageSize: 7, lastEvaluatedKey: $lastEvaluatedKey) {
    size
    content {
      id
      address
      price
      state
      city
      date
      zipCode
      area
      status
    }
    lastEvaluatedKey
    numberOfElements
    totalPages
  }
}
    `) as unknown as TypedDocumentString<GetDealsPageQuery, GetDealsPageQueryVariables>;
export const GetDealsCountDocument = new TypedDocumentString(`
    query getDealsCount {
  getDealsCount
}
    `) as unknown as TypedDocumentString<GetDealsCountQuery, GetDealsCountQueryVariables>;