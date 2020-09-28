
export function createKeyPair(publicKey: Buffer, privateKey:Buffer): number;

export function createSignature(sig: Buffer, sigLen: Buffer, message: Buffer, privateKey: Buffer): number;

export function verifySignature(sig: Buffer, message: Buffer, publicKey: Buffer): number;