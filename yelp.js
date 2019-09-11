import axios from 'axios';

export default axios.create({
    baseURL :'https://api.yelp.com/v3/businesses',
    headers : {
        Authorisation :
            'Bearer ugrZI2RPWtTJZ0frsGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiDtbLrcW77HPEwrJM2Ej2yFNYwrvqrxxBzh-OulqguN6DKLoOaWpxKCSdwzluQ9379DzrMhpF4XXYx'
    }
});