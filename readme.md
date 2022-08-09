||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/login api
____________________________________________________________

request example(json in body element):
{
"email":"magar@gmail.com",
"password":"123456"

}

response expected(Object/json):
    {
        "login": true
    }

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/adduser
______________________________________________________________
request example(json in body element):

{
    "fname":"dev",
    "lname":"Singh",
    "email":"dev@gmail.com",
    "password":"123456",
    "sex":"Male",
    "phone":"647862912"
}


response expected(Object/json):
{
    "fname": "dev",
    "lname": "Singh",
    "email": "dev@gmail.com",
    "password": "$2b$05$cR7SMdKEYzGuA3zwnUw4TOldlmlDxfYtHhQU76dS353diwIRM3yDS",
    "phone": 647862912,
    "sex": "Male",
    "_id": "62f206e7b6b171af77e5b594",
    "profilemaketime": "1660028647305",
    "__v": 0
}
__________________________________________________________________________

edit env file with required information
