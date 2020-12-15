lpTag.identities = [];
lpTag.identities.push(identifyFn);
console.log(lpTag.identities);
function identifyFn(callback) {
    callback(null);
}
