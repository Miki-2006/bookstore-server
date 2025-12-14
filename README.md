# BOOKSTORE-SERVER

<br>
<br>

## ERD
![Database diagram design](./public/erd.png)

<br>
<br>

## Swagger UI, Postman API
- [Explore Swagger UI](https://app.swaggerhub.com/apis/qucompany/init/1.0.0)
- [Explore Postman API](https://.postman.co/workspace/My-Workspace~cefe9a8c-a8d6-40a1-8175-ab28c5c0b186/collection/34477062-b571b746-c612-40a2-b9ed-e7be038ae2ce?action=share&creator=34477062)

<br>
<br>

## Response codes

> [!NOTE]
> Codes divide to groups by tables from DB :
> ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` 
> ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` 
> ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` 
> ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews`
> ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites`
> ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart`
<br>

### Success codes

| **HTTP code** | **Success code**  | **Description**                                  |                                                          **group** |
| ------------- | ----------------- | ------------------------------------------------ | -----------------------------------------------------------------: |
| 200           | `USER_REGISTERED` | _New user successfully registered!_              |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 200           | `USER_LOGGED`     | _User successfully logged in/signed in!_         |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 200           | `BOOKS_GETTED`    | _All books were successfully got!_               |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 201           | `BOOK_ADDED`      | _New book successfully added!_                   |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 201           | `ORDER_CREATED`   | _New order was successfully created!_            |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 200           | `ORDERS_FETCHED`  | _Orders of specific user successfully fetched!_  |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 200           | `REVIEWS_FETCHED` | _Reviews of specific user successfully fetched!_ | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 200           | `REVIEWS_FETCHED` | _Reviews of specific book successfully fetched!_ | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 200 | `CART_BOOKS_GETTED` | _Books were fethced successfully from cart of user!_ | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart` |
| 201 | `BOOK_ADDED_TO_CART` | _New book was added successfully to cart of user!_ | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart` |
| 200 | `FAVORITES_GETTED` | _Favorite books were fethced successfully of user!_ | ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites` |
| 201 | `BOOK_ADDED_TO_FAVORITES` | _New book was added successfully to favorites of user!_ | ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites` |

<br>
<br>

### Error codes

| **HTTP code** | **Error code**         | **Description**                                                 |                                                          **group** |
| ------------- | ---------------------- | --------------------------------------------------------------- | -----------------------------------------------------------------: |
| 400           | `FIRST_NAME_REQUIRED`  | _First name field must be filled!_                              |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400           | `LAST_NAME_REQUIRED`   | _Last name field must be filled!_                               |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400           | `PHONE_REQUIRED`       | _Phone field must be filled!_                                   |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400           | `PASSWORD_REQUIRED`    | _Password field must be filled!_                                |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400           | `PASSWORD_TOO_SHORT`   | _Password must be at least 6 digits!_                           |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 403           | `PASSWORD_INCORRECT`   | _Password is not correct for specific user!_                    |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 404           | `USER_NOT_FOUND`       | _There is no user with provided id!_                            |   ![#f03c15](https://placehold.co/15x15/f03c15/f03c15.png) `users` |
| 400           | `BOOKS_ERROR`          | _Something went wrong while fetching book!_                     |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `TITLE_REQUIRED`       | _Title field must be filled to add new book!_                   |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `AUTHOR_REQUIRED`      | _Author field must be filled to add new book!_                  |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `DESCRIPTION_REQUIRED` | _Description field must be filled to add new book!_             |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `QUANTITY_REQUIRED`    | _Quantity field must be filled to add new book!_                |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `PRICE_REQUIRED`       | _Price field must be filled to add new book!_                   |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `CATEGORY_REQUIRED`    | _Category field must be filled to add new book!_                |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `BOOK_NOT_ADDED`       | _Something went wrong while adding new book!_                   |   ![#c5f015](https://placehold.co/15x15/c5f015/c5f015.png) `books` |
| 400           | `ORDER_ERROR`          | _Something went wrong while creating new order!_                |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `USER_ID_REQUIRED`     | _User id field must be filled to create new order!_             |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `BOOK_ID_REQUIRED`     | _Book id field must be filled to create new order!_             |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `QUANTITY_REQUIRED`    | _Quantity field must be filled to create new order!_            |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `ORDER_DATE_REQUIRED`  | _Order date field must be filled to create new order!_          |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `STATUS_REQUIRED`      | _Status field must be filled to create new order!_              |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `NUMBER_TYPE_REQUIRED` | _The user_id, book_id and quantity fields must be number type!_ |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `STRING_TYPE_REQUIRED` | _The order_date and status fields must be string type!_         |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 404           | `ORDER_NOT_FOUND`      | _There is no orders for user with specific id!_                 |  ![#1589F0](https://placehold.co/15x15/1589F0/1589F0.png) `orders` |
| 400           | `REVIEWS_ERROR`        | _Something went wrong while fetching reviews!_                  | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 404           | `REVIEWS_NOT_FOUND`    | _There is no reviews of user with specific id!_                 | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |
| 404           | `REVIEWS_NOT_FOUND`    | _There is no reqviews of book with specific id!_                | ![#FFB343](https://placehold.co/15x15/FFB343/FFB343.png) `reviews` |


| 400           | `USER_ID_REQUIRED`     | _User id field must be filled to add to cart!_             | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart`  |
| 400           | `BOOK_ID_REQUIRED`     | _Book id field must be filled to add to cart!_             |  ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart` |
| 400           | `QUANTITY_REQUIRED`    | _Quantity field must be filled to add to cart!_            | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart` |
| 404 | `CART_IS_EMPTY` | _Cart of specific user is empty!_ | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart` |
| 500 | `CART_ERROR` | _Something went wrong while adding book to cart!_ | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `cart` |

| 400           | `USER_ID_REQUIRED`     | _User id field must be filled to add book to favorites!_             | ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites`  |
| 400           | `BOOK_ID_REQUIRED`     | _Book id field must be filled to add book to favorites!_             |  ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites` |
| 404 | `FAVORITES_IS_EMPTY` | _Favorites of specific user is empty!_ | ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites` |
| 500 | `FAVORITES_ERROR` | _Something went wrong while adding book to favorites!_ | ![#EE82EE](https://placehold.co/15x15/EE82EE/EE82EE.png) `favorites` |