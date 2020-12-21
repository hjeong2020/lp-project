lpTag.identities = []
lpTag.identities.push(identifyFn);
console.log(lpTag.identities[0])
function identifyFn(callback) {
    callback({
        iss: 'LP-Brand',
        acr: 'loa1',
        sub: "1234567890"
    })
}


function authenticate(callback) {
    console.log("The Authenticate function has been called");
    const jwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiTFAtQnJhbmQiLCJhdWQiOiJhY2M6cWE1NzIyMTY3NiIsImV4cCI6MTY2MTk3NTMzMiwiaWF0IjoxNjA4MDYxNzMyfQ.tKAkTYD_rSBrlvBbz5tYbOX3tSW4-cNfuQ5rpVx5-hQ5RvMMPlYp1KqlYQf9vEIL7Ou2YTuOkyOiINjRrKKje9hp_g-p5wzv5ttfpdttg7WRvJP2EuMPutM9gFFu1wwqLyyPwPgb-7gkVF6h5SvXQONsnGa927lXD1NUV2DN-mQ";
    callback(jwt)
}

const cartValue = "1000"
const title = document.title;

var lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes || [];
var data = {
    "type": "cart",
    "total": 11.7,
    "title": title
}
;
console.log(data);
console.log(cartValue);
lpTag.sdes.push(data);
var fun = function () { lpTag.sdes.push(data)};
lpTag.sdes.send(data, fun);


