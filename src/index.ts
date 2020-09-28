import { createKeyPair } from '../lib/falcon1024';

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
        })
    }
}