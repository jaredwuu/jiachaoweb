const url = require('url');

const myUrl = new URL(
    'http://mywebsite.com:8000/hello.html?id=100&status=active'
    );
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.searchParams);
console.log(myUrl.search);
console.log(myUrl.pathname);
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));
