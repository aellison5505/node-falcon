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
    createSignature(message, privateKey) {
        return new Promise((res) => {
            let sigLong = Buffer.alloc(1330, 0);
            let sLen = Buffer.alloc(4);
            let ret = falcon1024_1.createSignature(sigLong, sLen, message, privateKey);
            let buff = sLen.readIntLE(0, 4);
            let sig = Buffer.alloc(buff, 0);
            sigLong.copy(sig, 0, 0, buff);
            res(sig);
        });
    }
    verifySignature(signature, message, publicKey) {
        return new Promise((res, err) => {
            try {
                let sec = falcon1024_1.verifySignature(signature, message, publicKey);
                (sec === 0 ? res() : err(new Error('not verified')));
            }
            catch (err) {
                err(new Error('not verified'));
            }
        });
    }
}
exports.Falcon1024 = Falcon1024;
//# sourceMappingURL=index.js.map