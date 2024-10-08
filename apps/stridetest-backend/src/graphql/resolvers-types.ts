import {GraphQLResolveInfo} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerPage: ResolverTypeWrapper<CustomerPage>;
  Deal: ResolverTypeWrapper<Deal>;
  DealPage: ResolverTypeWrapper<DealPage>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Task: ResolverTypeWrapper<Task>;
  TaskPage: ResolverTypeWrapper<TaskPage>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Customer: Customer;
  CustomerPage: CustomerPage;
  Deal: Deal;
  DealPage: DealPage;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Task: Task;
  TaskPage: TaskPage;
}>;

export type CustomerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Customer'] = ResolversParentTypes['Customer'],
> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerPageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerPage'] = ResolversParentTypes['CustomerPage'],
> = ResolversObject<{
  content?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Customer']>>>,
    ParentType,
    ContextType
  >;
  lastEvaluatedKey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  numberOfElements?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElemets?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Deal'] = ResolversParentTypes['Deal'],
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  area?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealPageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['DealPage'] = ResolversParentTypes['DealPage'],
> = ResolversObject<{
  content?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Deal']>>>,
    ParentType,
    ContextType
  >;
  lastEvaluatedKey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  numberOfElements?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  createCustomer?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCustomerArgs, 'email' | 'name' | 'phoyo'>
  >;
  createDeal?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateDealArgs,
      'address' | 'city' | 'description' | 'id' | 'state' | 'zipCode'
    >
  >;
  createTask?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTaskArgs, 'description'>
  >;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  getCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCustomerArgs, 'id'>
  >;
  getCustomersPage?: Resolver<
    Maybe<ResolversTypes['CustomerPage']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCustomersPageArgs, 'pageNumber' | 'pageSize'>
  >;
  getDeal?: Resolver<
    Maybe<ResolversTypes['Deal']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDealArgs, 'id'>
  >;
  getDealsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  getDealsPage?: Resolver<
    Maybe<ResolversTypes['DealPage']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetDealsPageArgs, 'pageNumber' | 'pageSize'>
  >;
  getTask?: Resolver<
    Maybe<ResolversTypes['Task']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTaskArgs, 'id'>
  >;
  getTasksPage?: Resolver<
    Maybe<ResolversTypes['TaskPage']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTasksPageArgs, 'pageNumber' | 'pageSize'>
  >;
}>;

export type TaskResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Task'] = ResolversParentTypes['Task'],
> = ResolversObject<{
  createdAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskPageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TaskPage'] = ResolversParentTypes['TaskPage'],
> = ResolversObject<{
  content?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Task']>>>,
    ParentType,
    ContextType
  >;
  lastEvaluatedKey?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  numberOfElements?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Customer?: CustomerResolvers<ContextType>;
  CustomerPage?: CustomerPageResolvers<ContextType>;
  Deal?: DealResolvers<ContextType>;
  DealPage?: DealPageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskPage?: TaskPageResolvers<ContextType>;
}>;
