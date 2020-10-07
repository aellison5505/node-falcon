"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falcon1024 = void 0;
const node_falcon_1 = require("../lib/node-falcon");
const os_1 = require("os");
/**
 * Promise interface for Post Quantum falcon 1024 signature algorithm.
 * Dependency code acquired from liboqs
 * https://github.com/open-quantum-safe/liboqs
 */
class Falcon1024 {
    /**
     * Create key pair for signature.
     * @returns Promise with keys
     */
    createKeys() {
        return new Promise((res) => {
            let pub = Buffer.alloc(1793, 0);
            let pri = Buffer.alloc(2305, 0);
            let ret = node_falcon_1.createKeyPair(pub, pri);
            let keys = {
                publicKey: pub,
                privateKey: pri
            };
            res(keys);
        });
    }
    /**
     * Creates and returns the falcon 1024 signature.
     * @param message Hashed message to sign
     * @param privateKey Private key
     * @returns Promise Buffer of signature
     */
    createSignature(message, privateKey) {
        return new Promise((res) => {
            let sigLong = Buffer.alloc(1330, 0);
            let sLen = Buffer.alloc(4);
            let ret = node_falcon_1.createSignature(sigLong, sLen, message, privateKey);
            let len;
            if (os_1.endianness() === "LE")
                len = sLen.readUIntLE(0, 4);
            else
                len = sLen.readUInt32BE(0);
            let sig = Buffer.alloc(len, 0);
            sigLong.copy(sig, 0, 0, len);
            res(sig);
        });
    }
    /**
     * Verifies the message with the public key
     * @param signature The falcon signature to verify.
     * @param message Hashed message to verify.
     * @param publicKey Public key of the key pair.
     * @returns 0 if verified, throws error if not verified.
     */
    verifySignature(signature, message, publicKey) {
        return new Promise((res, err) => {
            try {
                let sec = node_falcon_1.verifySignature(signature, message, publicKey);
                (sec === 0 ? res(0) : err(new Error('not verified')));
            }
            catch (err) {
                err(new Error('not verified'));
            }
        });
    }
}
exports.Falcon1024 = Falcon1024;
//# sourceMappingURL=index.js.map