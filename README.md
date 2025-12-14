# BOOKSTORE-SERVER

<br>
<br>

## Response codes
> [!NOTE]
> Codes divide to groups by tables from DB :
> ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users`
> ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books`
> ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders`
> ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews`
<br>

### Success codes

| **HTTP code** | **Success code** | **Description** | **group**
| --------- | ------------ | ----------- | -------: |
| 200 | `USER_REGISTERED` | *New user successfully registered!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 200 | `USER_LOGGED` | *User successfully logged in/signed in!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 200 | `BOOKS_GETTED` | *All books were successfully got!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 201 | `BOOK_ADDED` | *New book successfully added!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 201 | `ORDER_CREATED` | *New order was successfully created!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 200 | `ORDERS_FETCHED` | *Orders of specific user successfully fetched!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 200 | `REVIEWS_FETCHED` | *Reviews of specific user successfully fetched!* | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 200 | `REVIEWS_FETCHED` | *Reviews of specific book successfully fetched!* | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |

<br>
<br>

### Error codes

| **HTTP code** | **Error code** | **Description** | **group** |
| --------- | ------------ | ----------- | -----------: |
| 400 | `FIRST_NAME_REQUIRED` | *First name field must be filled!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400 | `LAST_NAME_REQUIRED` | *Last name field must be filled!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400 | `PHONE_REQUIRED` | *Phone field must be filled!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400 | `PASSWORD_REQUIRED` | *Password field must be filled!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400 | `PASSWORD_TOO_SHORT` | *Password must be at least 6 digits!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 403 | `PASSWORD_INCORRECT` | *Password is not correct for specific user!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 404 | `USER_NOT_FOUND` | *There is no user with provided id!* | ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400 | `BOOKS_ERROR` | *Something went wrong while fetching book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `TITLE_REQUIRED` | *Title field must be filled to add new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `AUTHOR_REQUIRED` | *Author field must be filled to add new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `DESCRIPTION_REQUIRED` | *Description field must be filled to add new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `QUANTITY_REQUIRED` | *Quantity field must be filled to add new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `PRICE_REQUIRED` | *Price field must be filled to add new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `CATEGORY_REQUIRED` | *Category field must be filled to add new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `BOOK_NOT_ADDED` | *Something went wrong while adding new book!* | ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400 | `ORDER_ERROR` | *Something went wrong while creating new order!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `USER_ID_REQUIRED` | *User id field must be filled to create new order!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `BOOK_ID_REQUIRED` | *Book id field must be filled to create new order!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `QUANTITY_REQUIRED` | *Quantity field must be filled to create new order!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `ORDER_DATE_REQUIRED` | *Order date field must be filled to create new order!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `STATUS_REQUIRED` | *Status field must be filled to create new order!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `NUMBER_TYPE_REQUIRED` | *The user_id, book_id and quantity fields must be number type!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `STRING_TYPE_REQUIRED` | *The order_date and status fields must be string type!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 404 | `ORDER_NOT_FOUND` | *There is no orders for user with specific id!* | ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400 | `REVIEWS_ERROR` | *Something went wrong while fetching reviews!* | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 404 | `REVIEWS_NOT_FOUND` | *There is no reviews of user with specific id!* | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 404 | `REVIEWS_NOT_FOUND` | *There is no reqviews of book with specific id!* | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
