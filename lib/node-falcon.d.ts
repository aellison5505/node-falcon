

export function createKeyPair(publicKey: Buffer, privateKey: Buffer): number
export function createSignature(signature: Buffer, sugLength: Buffer, message: Buffer, privateKey: Buffer): number
export  function verifySignature(signature: Buffer, message: Buffer, publicKey: Buffer): number
