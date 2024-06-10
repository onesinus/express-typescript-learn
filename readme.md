# Run the server in development mode
npm run dev

# To build
npm run build

# start the server
npm start

# Example hit api

## GET Users
http://localhost:6969/users

## example response
```json
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@test.com",
            "password": "123456"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "email": "jane.doe@test.com",
            "password": "secret"
        },
        {
            "id": 3,
            "name": "Jack Doe",
            "email": "jack.doe@test.com",
            "password": "password"
        }
    ]
}
```

## GET data Posts
http://localhost:6969/posts

## example response
```json
{
    "posts": [
        {
            "id": 1,
            "title": "How to make banana cake",
            "content": "Buy banana, make a cake, done"
        },
        {
            "id": 2,
            "title": "How to make your crush fall in love in you",
            "content": "step 1. Making much money, .. step 99. Be a crazy rich"
        }
    ]
}
```

## POST
http://localhost:6969/users

## Example request header
```
content-type: application/json
```

## Example request body
```json
{"id": "9", "name": "wkoawk", "email":"hehe", "password": "wkwk12"}
```

## example response
```json
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@test.com",
            "password": "123456"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "email": "jane.doe@test.com",
            "password": "secret"
        },
        {
            "id": 3,
            "name": "Jack Doe",
            "email": "jack.doe@test.com",
            "password": "password"
        },
        {
            "id": "9",
            "name": "wkoawk",
            "email": "hehe",
            "password": "wkwk12"
        }
    ]
}
```


## POST data
http://localhost:6969/posts
## Example request header
```
content-type: application/json
```

## Example request body
```json
{"id": "69", "title": "I love you but i'm letting you go", "content":"hehe"}
```

## example response
```json
{
    "message": "Invalid post data",
    "errors": [
        "\"content\" length must be at least 10 characters long"
    ]
}
```