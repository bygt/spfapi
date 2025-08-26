const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Scalar types
  scalar Date
  scalar Upload

  # User types
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    fullName: String!
    phone: String
    role: UserRole!
    isActive: Boolean!
    emailVerified: Boolean!
    addresses: [Address!]
    wishlist: [Product!]
    lastLogin: Date
    createdAt: Date!
    updatedAt: Date!
  }

  type Address {
    _id: ID!
    type: AddressType!
    street: String!
    city: String!
    state: String!
    postalCode: String!
    country: String!
    isDefault: Boolean!
  }

  enum UserRole {
    customer
    admin
    moderator
  }

  enum AddressType {
    home
    work
    other
  }

  # Product types
  type Product {
    _id: ID!
    name: String!
    description: String!
    shortDescription: String
    sku: String!
    price: Float!
    compareAtPrice: Float
    costPrice: Float
    currency: Currency!
    category: Category!
    subcategory: Category
    brand: String
    tags: [String!]
    images: [ProductImage!]!
    variants: [ProductVariant!]
    inventory: Inventory!
    shipping: Shipping!
    seo: SEO!
    status: ProductStatus!
    featured: Boolean!
    rating: Rating!
    sales: Sales!
    discountPercentage: Int!
    isOnSale: Boolean!
    isLowStock: Boolean!
    isOutOfStock: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  type ProductImage {
    _id: ID!
    url: String!
    alt: String
    isPrimary: Boolean!
  }

  type ProductVariant {
    _id: ID!
    name: String!
    value: String!
    priceModifier: Float!
  }

  type Inventory {
    quantity: Int!
    lowStockThreshold: Int!
    trackQuantity: Boolean!
    allowBackorder: Boolean!
  }

  type Shipping {
    weight: Float
    weightUnit: WeightUnit!
    dimensions: Dimensions
    freeShipping: Boolean!
  }

  type Dimensions {
    length: Float
    width: Float
    height: Float
    unit: DimensionUnit!
  }

  type SEO {
    metaTitle: String
    metaDescription: String
    slug: String!
  }

  type Rating {
    average: Float!
    count: Int!
  }

  type Sales {
    totalSold: Int!
    revenue: Float!
  }

  enum Currency {
    TRY
    USD
    EUR
    GBP
  }

  enum ProductStatus {
    active
    inactive
    draft
    archived
  }

  enum WeightUnit {
    kg
    g
    lb
    oz
  }

  enum DimensionUnit {
    cm
    m
    in
  }

  # Category types
  type Category {
    _id: ID!
    name: String!
    description: String
    slug: String!
    parent: Category
    level: Int!
    path: [Category!]!
    fullPath: String!
    image: CategoryImage
    seo: CategorySEO!
    isActive: Boolean!
    featured: Boolean!
    sortOrder: Int!
    productCount: Int!
    children: [Category!]
    createdAt: Date!
    updatedAt: Date!
  }

  type CategoryImage {
    url: String!
    alt: String
  }

  type CategorySEO {
    metaTitle: String
    metaDescription: String
    keywords: [String!]
  }

  # Order types
  type Order {
    _id: ID!
    orderNumber: String!
    user: User!
    status: OrderStatus!
    items: [OrderItem!]!
    subtotal: Float!
    tax: Float!
    shipping: OrderShipping!
    discount: Discount!
    total: Float!
    currency: Currency!
    billingAddress: Address!
    shippingAddress: Address!
    payment: Payment!
    notes: OrderNotes
    tags: [String!]
    source: OrderSource!
    itemCount: Int!
    isPaid: Boolean!
    canCancel: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  type OrderItem {
    _id: ID!
    product: Product!
    quantity: Int!
    price: Float!
    total: Float!
    variant: OrderItemVariant
  }

  type OrderItemVariant {
    name: String!
    value: String!
    priceModifier: Float!
  }

  type OrderShipping {
    cost: Float!
    method: String
    trackingNumber: String
    estimatedDelivery: Date
  }

  type Discount {
    amount: Float!
    code: String
    type: DiscountType!
  }

  type Payment {
    method: PaymentMethod!
    status: PaymentStatus!
    transactionId: String
    paidAt: Date
  }

  type OrderNotes {
    customer: String
    internal: String
  }

  enum OrderStatus {
    pending
    confirmed
    processing
    shipped
    delivered
    cancelled
    refunded
  }

  enum PaymentMethod {
    credit_card
    bank_transfer
    paypal
    cash_on_delivery
  }

  enum PaymentStatus {
    pending
    completed
    failed
    refunded
  }

  enum DiscountType {
    percentage
    fixed
  }

  enum OrderSource {
    web
    mobile
    admin
    api
  }

  # Input types
  input UserInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    phone: String
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    phone: String
    addresses: [AddressInput!]
  }

  input AddressInput {
    type: AddressType!
    street: String!
    city: String!
    state: String!
    postalCode: String!
    country: String!
    isDefault: Boolean!
  }

  input ProductInput {
    name: String!
    description: String!
    shortDescription: String
    sku: String!
    price: Float!
    compareAtPrice: Float
    costPrice: Float
    currency: Currency
    category: ID!
    subcategory: ID
    brand: String
    tags: [String!]
    images: [ProductImageInput!]!
    variants: [ProductVariantInput!]
    inventory: InventoryInput!
    shipping: ShippingInput!
    seo: SEOInput!
    status: ProductStatus
    featured: Boolean
  }

  input ProductImageInput {
    url: String!
    alt: String
    isPrimary: Boolean
  }

  input ProductVariantInput {
    name: String!
    value: String!
    priceModifier: Float
  }

  input InventoryInput {
    quantity: Int!
    lowStockThreshold: Int
    trackQuantity: Boolean
    allowBackorder: Boolean
  }

  input ShippingInput {
    weight: Float
    weightUnit: WeightUnit
    dimensions: DimensionsInput
    freeShipping: Boolean
  }

  input DimensionsInput {
    length: Float
    width: Float
    height: Float
    unit: DimensionUnit
  }

  input SEOInput {
    metaTitle: String
    metaDescription: String
    slug: String!
  }

  input CategoryInput {
    name: String!
    description: String
    slug: String!
    parent: ID
    image: CategoryImageInput
    seo: CategorySEOInput
    isActive: Boolean
    featured: Boolean
    sortOrder: Int
  }

  input CategoryImageInput {
    url: String!
    alt: String
  }

  input CategorySEOInput {
    metaTitle: String
    metaDescription: String
    keywords: [String!]
  }

  input OrderInput {
    user: ID!
    items: [OrderItemInput!]!
    billingAddress: AddressInput!
    shippingAddress: AddressInput!
    payment: PaymentInput!
    notes: OrderNotesInput
    currency: Currency
  }

  input OrderItemInput {
    product: ID!
    quantity: Int!
    price: Float!
    variant: OrderItemVariantInput
  }

  input OrderItemVariantInput {
    name: String!
    value: String!
    priceModifier: Float
  }

  input PaymentInput {
    method: PaymentMethod!
    transactionId: String
  }

  input OrderNotesInput {
    customer: String
    internal: String
  }

  # Query types
  type Query {
    # User queries
    me: User
    user(id: ID!): User
    users(role: UserRole, isActive: Boolean): [User!]!
    
    # Product queries
    products(
      category: ID
      status: ProductStatus
      featured: Boolean
      search: String
      minPrice: Float
      maxPrice: Float
      limit: Int
      offset: Int
      sortBy: String
      sortOrder: String
    ): ProductConnection!
    product(id: ID!, slug: String): Product
    featuredProducts(limit: Int): [Product!]!
    
    # Category queries
    categories(parent: ID, isActive: Boolean): [Category!]!
    category(id: ID!, slug: String): Category
    categoryTree: [Category!]!
    
    # Order queries
    myOrders(status: OrderStatus): [Order!]!
    order(id: ID!, orderNumber: String): Order
    orders(
      user: ID
      status: OrderStatus
      startDate: Date
      endDate: Date
      limit: Int
      offset: Int
    ): OrderConnection!
  }

  # Mutation types
  type Mutation {
    # User mutations
    register(input: UserInput!): AuthResponse!
    login(email: String!, password: String!): AuthResponse!
    updateProfile(input: UserUpdateInput!): User!
    changePassword(currentPassword: String!, newPassword: String!): User!
    
    # Product mutations
    createProduct(input: ProductInput!): Product!
    updateProduct(id: ID!, input: ProductInput!): Product!
    deleteProduct(id: ID!): Boolean!
    updateProductInventory(id: ID!, quantity: Int!, operation: String!): Product!
    
    # Category mutations
    createCategory(input: CategoryInput!): Category!
    updateCategory(id: ID!, input: CategoryInput!): Category!
    deleteCategory(id: ID!): Boolean!
    
    # Order mutations
    createOrder(input: OrderInput!): Order!
    updateOrderStatus(id: ID!, status: OrderStatus!, notes: String): Order!
    cancelOrder(id: ID!): Order!
    
    # Wishlist mutations
    addToWishlist(productId: ID!): User!
    removeFromWishlist(productId: ID!): User!
  }

  # Response types
  type AuthResponse {
    token: String!
    user: User!
  }

  # Connection types for pagination
  type ProductConnection {
    products: [Product!]!
    totalCount: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  type OrderConnection {
    orders: [Order!]!
    totalCount: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  # Subscription types (for real-time updates)
  type Subscription {
    orderStatusChanged: Order!
    productUpdated: Product!
  }
`;

module.exports = typeDefs;
