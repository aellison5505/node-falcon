
export function createKeyPair(publicKey: Buffer, privateKey:Buffer): number;

export function createSignature(sig: Buffer, sigLen: Buffer, message: Buffer, mLen: number, pivateKey: Buffer): number;