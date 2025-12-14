# BOOKSTORE-SERVER

<br>
<br>

## Response codes

<br>

### Success codes

| **HTTP code** | **Success code** | **Description** |
| --------- | ------------ | ----------- |
| 200 | `USER_REGISTERED` | *New user successfully registered!* |
| 200 | `USER_LOGGED` | *User successfully logged in/signed in!* |
| 200 | `BOOKS_GETTED` | *All books were successfully got!* |
| 201 | `BOOK_ADDED` | *New book successfully added!* |
| 201 | `ORDER_CREATED` | *New order was successfully created!* |
| 200 | `ORDERS_FETCHED` | *Orders of specific user successfully fetched!* |
| 200 | `REVIEWS_FETCHED` | *Reviews of specific user successfully fetched!* |
| 200 | `REVIEWS_FETCHED` | *Reviews of specific book successfully fetched!* |

<br>
<br>

### Error codes

| **HTTP code** | **Error code** | **Description** |
| --------- | ------------ | ----------- |
| 400 | `FIRST_NAME_REQUIRED` | *First name field must be filled!* |
| 400 | `LAST_NAME_REQUIRED` | *Last name field must be filled!* |
| 400 | `PHONE_REQUIRED` | *Phone field must be filled!* |
| 400 | `PASSWORD_REQUIRED` | *Password field must be filled!* |
| 400 | `PASSWORD_TOO_SHORT` | *Password must be at least 6 digits!* |
| 403 | `PASSWORD_INCORRECT` | *Password is not correct for specific user!* |
| 404 | `USER_NOT_FOUND` | *There is no user with provided id!* |
| 400 | `BOOKS_ERROR` | *Something went wrong while fetching book!* |
| 400 | `TITLE_REQUIRED` | *Title field must be filled to add new book!* |
| 400 | `AUTHOR_REQUIRED` | *Author field must be filled to add new book!* |
| 400 | `DESCRIPTION_REQUIRED` | *Description field must be filled to add new book!* |
| 400 | `QUANTITY_REQUIRED` | *Quantity field must be filled to add new book!* |
| 400 | `PRICE_REQUIRED` | *Price field must be filled to add new book!* |
| 400 | `CATEGORY_REQUIRED` | *Category field must be filled to add new book!* |
| 400 | `BOOK_NOT_ADDED` | *Something went wrong while adding new book!* |
| 400 | `ORDER_ERROR` | *Something went wrong while creating new order!* |
| 400 | `USER_ID_REQUIRED` | *User id field must be filled to create new order!* |
| 400 | `BOOK_ID_REQUIRED` | *Book id field must be filled to create new order!* |
| 400 | `QUANTITY_REQUIRED` | *Quantity field must be filled to create new order!* |
| 400 | `ORDER_DATE_REQUIRED` | *Order date field must be filled to create new order!* |
| 400 | `STATUS_REQUIRED` | *Status field must be filled to create new order!* |
| 400 | `NUMBER_TYPE_REQUIRED` | *The user_id, book_id and quantity fields must be number type!* |
| 400 | `STRING_TYPE_REQUIRED` | *The order_date and status fields must be string type!* |
| 404 | `ORDER_NOT_FOUND` | *There is no orders for user with specific id!* |
| 400 | `REVIEWS_ERROR` | *Something went wrong while fetching reviews!* |
| 404 | `REVIEWS_NOT_FOUND` | *There is no reviews of user with specific id!* |
| 404 | `REVIEWS_NOT_FOUND` | *There is no reqviews of book with specific id!* |
