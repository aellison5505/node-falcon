/// <reference types="node" />
export interface keys {
    publicKey: Buffer;
    privateKey: Buffer;
}
export declare class Falcon1024 {
    createKeys(): Promise<keys>;
    createSignature(message: Buffer, privateKey: Buffer): Promise<Buffer>;
    verifySignature(signature: Buffer, message: Buffer, publicKey: Buffer): Promise<Buffer>;
}
//# sourceMappingURL=index.d.ts.map