import { createKeyPair, createSignature, verifySignature } from '../lib/falcon1024';

export interface keys {
    publicKey: Buffer;
    privateKey: Buffer;
}

export class Falcon1024 {

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

    createSignature(message: Buffer, privateKey: Buffer): Promise<Buffer> {
        return new Promise<Buffer>((res) => {
            let sigLong = Buffer.alloc(1330, 0);
            let sLen = Buffer.alloc(4);

            let ret = createSignature(sigLong, sLen, message,privateKey);
            let buff = sLen.readIntLE(0,4);
            let sig = Buffer.alloc(buff,0);
            sigLong.copy(sig,0,0,buff);
            res(sig);
        });
    }

    verifySignature(signature: Buffer, message: Buffer, publicKey: Buffer): Promise<Buffer> {
        return new Promise<Buffer>((res, err) => {
            try{
            let sec = verifySignature(signature,message,publicKey);
            (sec === 0 ? res() : err(new Error('not verified')));
            } catch (err) {
                err(new Error('not verified'));
            }
        });
    }

}