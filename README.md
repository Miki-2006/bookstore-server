# BOOKSTORE-SERVER

<br>
<br>

## Response codes
> [!NOTE]
> Codes divide to groups by tables from DB
<br>

### Success codes

| **HTTP code** | **Success code** | **Description** | **group**
| --------- | ------------ | ----------- | -------: |
| 200 | `USER_REGISTERED` | *New user successfully registered!* | <span style="color:red;" >users</span> |
| 200 | `USER_LOGGED` | *User successfully logged in/signed in!* | <span style="color:red;" >users</span> |
| 200 | `BOOKS_GETTED` | *All books were successfully got!* | <span style="color:green;" >books</span> |
| 201 | `BOOK_ADDED` | *New book successfully added!* | <span style="color:green;" >books</span> |
| 201 | `ORDER_CREATED` | *New order was successfully created!* | <span style="color:blue;" >orders</span> |
| 200 | `ORDERS_FETCHED` | *Orders of specific user successfully fetched!* | <span style="color:blue;" >orders</span> |
| 200 | `REVIEWS_FETCHED` | *Reviews of specific user successfully fetched!* | <span style="color:yellow;" >reviews</span> |
| 200 | `REVIEWS_FETCHED` | *Reviews of specific book successfully fetched!* | <span style="color:yellow;" >reviews</span> |

<br>
<br>

### Error codes

| **HTTP code** | **Error code** | **Description** |
| --------- | ------------ | ----------- |
| 400 | `FIRST_NAME_REQUIRED` | *First name field must be filled!* | <span style="color:red;" >users</span> |
| 400 | `LAST_NAME_REQUIRED` | *Last name field must be filled!* | <span style="color:red;" >users</span> |
| 400 | `PHONE_REQUIRED` | *Phone field must be filled!* | <span style="color:red;" >users</span> |
| 400 | `PASSWORD_REQUIRED` | *Password field must be filled!* | <span style="color:red;" >users</span> |
| 400 | `PASSWORD_TOO_SHORT` | *Password must be at least 6 digits!* | <span style="color:red;" >users</span> |
| 403 | `PASSWORD_INCORRECT` | *Password is not correct for specific user!* | <span style="color:red;" >users</span> |
| 404 | `USER_NOT_FOUND` | *There is no user with provided id!* | <span style="color:red;" >users</span> |
| 400 | `BOOKS_ERROR` | *Something went wrong while fetching book!* | <span style="color:green;" >books</span> |
| 400 | `TITLE_REQUIRED` | *Title field must be filled to add new book!* | <span style="color:green;" >books</span> |
| 400 | `AUTHOR_REQUIRED` | *Author field must be filled to add new book!* | <span style="color:green;" >books</span> |
| 400 | `DESCRIPTION_REQUIRED` | *Description field must be filled to add new book!* | <span style="color:green;" >books</span> |
| 400 | `QUANTITY_REQUIRED` | *Quantity field must be filled to add new book!* | <span style="color:green;" >books</span> |
| 400 | `PRICE_REQUIRED` | *Price field must be filled to add new book!* | <span style="color:green;" >books</span> |
| 400 | `CATEGORY_REQUIRED` | *Category field must be filled to add new book!* | <span style="color:green;" >books</span> |
| 400 | `BOOK_NOT_ADDED` | *Something went wrong while adding new book!* | <span style="color:green;" >books</span> |
| 400 | `ORDER_ERROR` | *Something went wrong while creating new order!* | <span style="color:blue;" >orders</span> |
| 400 | `USER_ID_REQUIRED` | *User id field must be filled to create new order!* | <span style="color:blue;" >orders</span> |
| 400 | `BOOK_ID_REQUIRED` | *Book id field must be filled to create new order!* | <span style="color:blue;" >orders</span> |
| 400 | `QUANTITY_REQUIRED` | *Quantity field must be filled to create new order!* | <span style="color:blue;" >orders</span> |
| 400 | `ORDER_DATE_REQUIRED` | *Order date field must be filled to create new order!* | <span style="color:blue;" >orders</span> |
| 400 | `STATUS_REQUIRED` | *Status field must be filled to create new order!* | <span style="color:blue;" >orders</span> |
| 400 | `NUMBER_TYPE_REQUIRED` | *The user_id, book_id and quantity fields must be number type!* | <span style="color:blue;" >orders</span> |
| 400 | `STRING_TYPE_REQUIRED` | *The order_date and status fields must be string type!* | <span style="color:blue;" >orders</span> |
| 404 | `ORDER_NOT_FOUND` | *There is no orders for user with specific id!* | <span style="color:blue;" >orders</span> |
| 400 | `REVIEWS_ERROR` | *Something went wrong while fetching reviews!* | <span style="color:yellow;" >reviews</span> |
| 404 | `REVIEWS_NOT_FOUND` | *There is no reviews of user with specific id!* | <span style="color:yellow;" >reviews</span> |
| 404 | `REVIEWS_NOT_FOUND` | *There is no reqviews of book with specific id!* | <span style="color:yellow;" >reviews</span> |
