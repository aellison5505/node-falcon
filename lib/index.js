"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falcon1024 = void 0;
const falcon1024_1 = require("../lib/falcon1024");
class Falcon1024 {
    createKeys() {
        return new Promise((res) => {
            let pub = Buffer.alloc(1793, 0);
            let pri = Buffer.alloc(2305, 0);
            let ret = falcon1024_1.createKeyPair(pub, pri);
            let keys = {
                publicKey: pub,
                privateKey: pri
            };
            res(keys);
        });
    }
}
exports.Falcon1024 = Falcon1024;
//# sourceMappingURL=index.js.map