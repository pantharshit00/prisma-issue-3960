module.exports = {
        typeDefs: /* GraphQL */ `type Account {
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company!]
  email: String!
  id: Int!
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store!]
  username: String!
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  companies: CompanyCreateManyWithoutUserInput
  email: String!
  stores: StoreCreateManyWithoutUserInput
  username: String!
}

input AccountCreateOneWithoutCompaniesInput {
  create: AccountCreateWithoutCompaniesInput
  connect: AccountWhereUniqueInput
}

input AccountCreateOneWithoutStoresInput {
  create: AccountCreateWithoutStoresInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutCompaniesInput {
  email: String!
  stores: StoreCreateManyWithoutUserInput
  username: String!
}

input AccountCreateWithoutStoresInput {
  companies: CompanyCreateManyWithoutUserInput
  email: String!
  username: String!
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AccountPreviousValues {
  email: String!
  id: Int!
  username: String!
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateInput {
  companies: CompanyUpdateManyWithoutUserInput
  email: String
  stores: StoreUpdateManyWithoutUserInput
  username: String
}

input AccountUpdateManyMutationInput {
  email: String
  username: String
}

input AccountUpdateOneWithoutCompaniesInput {
  create: AccountCreateWithoutCompaniesInput
  update: AccountUpdateWithoutCompaniesDataInput
  upsert: AccountUpsertWithoutCompaniesInput
  delete: Boolean
  disconnect: Boolean
  connect: AccountWhereUniqueInput
}

input AccountUpdateOneWithoutStoresInput {
  create: AccountCreateWithoutStoresInput
  update: AccountUpdateWithoutStoresDataInput
  upsert: AccountUpsertWithoutStoresInput
  delete: Boolean
  disconnect: Boolean
  connect: AccountWhereUniqueInput
}

input AccountUpdateWithoutCompaniesDataInput {
  email: String
  stores: StoreUpdateManyWithoutUserInput
  username: String
}

input AccountUpdateWithoutStoresDataInput {
  companies: CompanyUpdateManyWithoutUserInput
  email: String
  username: String
}

input AccountUpsertWithoutCompaniesInput {
  update: AccountUpdateWithoutCompaniesDataInput!
  create: AccountCreateWithoutCompaniesInput!
}

input AccountUpsertWithoutStoresInput {
  update: AccountUpdateWithoutStoresDataInput!
  create: AccountCreateWithoutStoresInput!
}

input AccountWhereInput {
  companies_every: CompanyWhereInput
  companies_some: CompanyWhereInput
  companies_none: CompanyWhereInput
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  stores_every: StoreWhereInput
  stores_some: StoreWhereInput
  stores_none: StoreWhereInput
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  email: String
  id: Int
  username: String
}

type AggregateAccount {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateStore {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Company {
  id: Int!
  name: String
  user: Account
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String
  user: AccountCreateOneWithoutCompaniesInput
}

input CompanyCreateManyWithoutUserInput {
  create: [CompanyCreateWithoutUserInput!]
  connect: [CompanyWhereUniqueInput!]
}

input CompanyCreateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutUserInput {
  name: String
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompanyPreviousValues {
  id: Int!
  name: String
}

input CompanyScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CompanyScalarWhereInput!]
  OR: [CompanyScalarWhereInput!]
  NOT: [CompanyScalarWhereInput!]
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdateDataInput {
  name: String
  user: AccountUpdateOneWithoutCompaniesInput
}

input CompanyUpdateInput {
  name: String
  user: AccountUpdateOneWithoutCompaniesInput
}

input CompanyUpdateManyDataInput {
  name: String
}

input CompanyUpdateManyMutationInput {
  name: String
}

input CompanyUpdateManyWithoutUserInput {
  create: [CompanyCreateWithoutUserInput!]
  delete: [CompanyWhereUniqueInput!]
  connect: [CompanyWhereUniqueInput!]
  disconnect: [CompanyWhereUniqueInput!]
  update: [CompanyUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CompanyUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CompanyScalarWhereInput!]
  updateMany: [CompanyUpdateManyWithWhereNestedInput!]
}

input CompanyUpdateManyWithWhereNestedInput {
  where: CompanyScalarWhereInput!
  data: CompanyUpdateManyDataInput!
}

input CompanyUpdateOneInput {
  create: CompanyCreateInput
  update: CompanyUpdateDataInput
  upsert: CompanyUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateWithoutUserDataInput {
  name: String
}

input CompanyUpdateWithWhereUniqueWithoutUserInput {
  where: CompanyWhereUniqueInput!
  data: CompanyUpdateWithoutUserDataInput!
}

input CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput!
  create: CompanyCreateInput!
}

input CompanyUpsertWithWhereUniqueWithoutUserInput {
  where: CompanyWhereUniqueInput!
  update: CompanyUpdateWithoutUserDataInput!
  create: CompanyCreateWithoutUserInput!
}

input CompanyWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  user: AccountWhereInput
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: Int
}

scalar Long

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createStore(data: StoreCreateInput!): Store!
  updateStore(data: StoreUpdateInput!, where: StoreWhereUniqueInput!): Store
  updateManyStores(data: StoreUpdateManyMutationInput!, where: StoreWhereInput): BatchPayload!
  upsertStore(where: StoreWhereUniqueInput!, create: StoreCreateInput!, update: StoreUpdateInput!): Store!
  deleteStore(where: StoreWhereUniqueInput!): Store
  deleteManyStores(where: StoreWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  store(where: StoreWhereUniqueInput!): Store
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store]!
  storesConnection(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoreConnection!
  node(id: ID!): Node
}

type Store {
  company: Company
  id: Int!
  storeId: String!
  user: Account
}

type StoreConnection {
  pageInfo: PageInfo!
  edges: [StoreEdge]!
  aggregate: AggregateStore!
}

input StoreCreateInput {
  company: CompanyCreateOneInput
  storeId: String!
  user: AccountCreateOneWithoutStoresInput
}

input StoreCreateManyWithoutUserInput {
  create: [StoreCreateWithoutUserInput!]
  connect: [StoreWhereUniqueInput!]
}

input StoreCreateWithoutUserInput {
  company: CompanyCreateOneInput
  storeId: String!
}

type StoreEdge {
  node: Store!
  cursor: String!
}

enum StoreOrderByInput {
  id_ASC
  id_DESC
  storeId_ASC
  storeId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StorePreviousValues {
  id: Int!
  storeId: String!
}

input StoreScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  storeId: String
  storeId_not: String
  storeId_in: [String!]
  storeId_not_in: [String!]
  storeId_lt: String
  storeId_lte: String
  storeId_gt: String
  storeId_gte: String
  storeId_contains: String
  storeId_not_contains: String
  storeId_starts_with: String
  storeId_not_starts_with: String
  storeId_ends_with: String
  storeId_not_ends_with: String
  AND: [StoreScalarWhereInput!]
  OR: [StoreScalarWhereInput!]
  NOT: [StoreScalarWhereInput!]
}

type StoreSubscriptionPayload {
  mutation: MutationType!
  node: Store
  updatedFields: [String!]
  previousValues: StorePreviousValues
}

input StoreSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoreWhereInput
  AND: [StoreSubscriptionWhereInput!]
  OR: [StoreSubscriptionWhereInput!]
  NOT: [StoreSubscriptionWhereInput!]
}

input StoreUpdateInput {
  company: CompanyUpdateOneInput
  storeId: String
  user: AccountUpdateOneWithoutStoresInput
}

input StoreUpdateManyDataInput {
  storeId: String
}

input StoreUpdateManyMutationInput {
  storeId: String
}

input StoreUpdateManyWithoutUserInput {
  create: [StoreCreateWithoutUserInput!]
  delete: [StoreWhereUniqueInput!]
  connect: [StoreWhereUniqueInput!]
  disconnect: [StoreWhereUniqueInput!]
  update: [StoreUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [StoreUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [StoreScalarWhereInput!]
  updateMany: [StoreUpdateManyWithWhereNestedInput!]
}

input StoreUpdateManyWithWhereNestedInput {
  where: StoreScalarWhereInput!
  data: StoreUpdateManyDataInput!
}

input StoreUpdateWithoutUserDataInput {
  company: CompanyUpdateOneInput
  storeId: String
}

input StoreUpdateWithWhereUniqueWithoutUserInput {
  where: StoreWhereUniqueInput!
  data: StoreUpdateWithoutUserDataInput!
}

input StoreUpsertWithWhereUniqueWithoutUserInput {
  where: StoreWhereUniqueInput!
  update: StoreUpdateWithoutUserDataInput!
  create: StoreCreateWithoutUserInput!
}

input StoreWhereInput {
  company: CompanyWhereInput
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  storeId: String
  storeId_not: String
  storeId_in: [String!]
  storeId_not_in: [String!]
  storeId_lt: String
  storeId_lte: String
  storeId_gt: String
  storeId_gte: String
  storeId_contains: String
  storeId_not_contains: String
  storeId_starts_with: String
  storeId_not_starts_with: String
  storeId_ends_with: String
  storeId_not_ends_with: String
  user: AccountWhereInput
  AND: [StoreWhereInput!]
  OR: [StoreWhereInput!]
  NOT: [StoreWhereInput!]
}

input StoreWhereUniqueInput {
  id: Int
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  store(where: StoreSubscriptionWhereInput): StoreSubscriptionPayload
}
`
      }
    