export const STATUS_CODE = {
  RESPONSE_CODE_SUCCESSFUL: 200,
  RESPONSE_CODE_SUCCESSFUL_NO_CONTENT: 204,
  RESPONSE_CODE_CREATE_SUCCESSFUL: 201,
  RESPONSE_CODE_TOO_MANY_REQUESTS: 429,
  RESPONSE_CODE_NOT_FOUND: 404,
  RESPONSE_CODE_BAD_REQUEST: 400,
  RESPONSE_CODE_UNAUTHORIZED: 401,
}

export const ACCOUNT_ENDPOINT = {
  ENDPOINT_GENERATE_TOKEN_CREATE: '/Account/v1/GenerateToken',
  ENDPOINT_LOGIN: '/Account/v1/Login',
}

export const BOOKSTORE_ENDPOINT = {
  ENDPOINT_DELETE_ALL_BOOKS: (userid) => `/BookStore/v1/Books?UserId=${userid}`,
  ENDPOINT_ADD_BOOK_TO_COLLECTION_CREATE: '/BookStore/v1/Books',
  ENDPOINT_DELETE_A_BOOK: '/BookStore/v1/Book',
}

export const ERROR_MESSAGE = {
  ERROR_MSG_BOOKS_NOT_AVAILABLE_ON_COLLECTION:
    'ISBN supplied is not available in Books Collection!',
  ERROR_CODE_BOOKS_NOT_AVAILABLE_ON_COLLECTION: '1205',
  ERROR_MSG_BOOKS_NOT_EXISTING_ON_COLLECTION:
    "ISBN supplied is not available in User's Collection!",
  ERROR_CODE_BOOKS_NOT_EXISTING_ON_COLLECTION: '1206',
  ERROR_MSG_BOOKS_ALREADY_PRESENT_IN_COLLECTION:
    "ISBN already present in the User's Collection!",
  ERROR_CODE_BOOKS_ALREADY_PRESENT_IN_COLLECTION: '1210',
  ERROR_MSG_INCORRECT_USERID: 'User Id not correct!',
  ERROR_CODE_INCORRECT_USERID: '1207',
  ERROR_MSG_UNAUTHORIZED: 'User not authorized!',
  ERROR_CODE_UNAUTHORIZED: '1200',
}
