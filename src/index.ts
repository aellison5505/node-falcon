import { createKeyPair, createSignature, verifySignature } from '../lib/node-falcon';
import { endianness } from 'os';

/**
 * Key pair for falcon 1024 signature.
 */
export interface keys {
    publicKey: Buffer;
    privateKey: Buffer;
}

/**
 * Promise interface for Post Quantum falcon 1024 signature algorithm.
 * Dependency code acquired from PQClean
 * https://github.com/PQClean/PQClean
 */
export class Falcon1024 {

    /**
     * Create key pair for signature.
     * @returns Promise with keys
     */
    createKeys(): Promise<keys> {
        return new Promise<keys>((res) => {
           
            let pub = Buffer.alloc(1793,0);
            let pri = Buffer.alloc(2305,0);
            let ret = createKeyPair(pub, pri);
            let keys: keys = {
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
    createSignature(message: Buffer, privateKey: Buffer): Promise<Buffer> {
        return new Promise<Buffer>((res) => {
            let sigLong = Buffer.alloc(1330, 0);
            let sLen = Buffer.alloc(4);
            let ret = createSignature(sigLong, sLen, message,privateKey);
            let len;
            if(endianness() === "LE")
                len = sLen.readUIntLE(0, 4);
            else
                len = sLen.readUInt32BE(0);
            let sig = Buffer.alloc(len,0);
            sigLong.copy(sig,0,0,len);
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
    verifySignature(signature: Buffer, message: Buffer, publicKey: Buffer): Promise<number> {
        return new Promise<number>((res, err) => {
            try{
            let sec = verifySignature(signature,message,publicKey);
            (sec === 0 ? res(0) : err(new Error('not verified')));
            } catch (err) {
                err(new Error('not verified'));
            }
        });
    }

}