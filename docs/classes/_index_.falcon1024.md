**node-falcon**

> [README](../README.md) / [Globals](../globals.md) / ["index"](../modules/_index_.md) / Falcon1024

# Class: Falcon1024

Promise interface for Post Quantum falcon 1024 signature algorithm.
Dependency code acquired from PQClean
https://github.com/PQClean/PQClean

## Hierarchy

* **Falcon1024**

## Index

### Methods

* [createKeys](_index_.falcon1024.md#createkeys)
* [createSignature](_index_.falcon1024.md#createsignature)
* [verifySignature](_index_.falcon1024.md#verifysignature)

## Methods

### createKeys

▸ **createKeys**(): Promise\<[keys](../interfaces/_index_.keys.md)>

*Defined in [index.ts:23](https://github.com/aellison5505/faclon-node/blob/06bd32b/src/index.ts#L23)*

Create key pair for signature.

**Returns:** Promise\<[keys](../interfaces/_index_.keys.md)>

Promise with keys

___

### createSignature

▸ **createSignature**(`message`: Buffer, `privateKey`: Buffer): Promise\<Buffer>

*Defined in [index.ts:43](https://github.com/aellison5505/faclon-node/blob/06bd32b/src/index.ts#L43)*

Creates and returns the falcon 1024 signature.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | Buffer | Hashed message to sign |
`privateKey` | Buffer | Private key |

**Returns:** Promise\<Buffer>

Promise Buffer of signature

___

### verifySignature

▸ **verifySignature**(`signature`: Buffer, `message`: Buffer, `publicKey`: Buffer): Promise\<number>

*Defined in [index.ts:66](https://github.com/aellison5505/faclon-node/blob/06bd32b/src/index.ts#L66)*

Verifies the message with the public key

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signature` | Buffer | The falcon signature to verify. |
`message` | Buffer | Hashed message to verify. |
`publicKey` | Buffer | Public key of the key pair. |

**Returns:** Promise\<number>

0 if verified, throws error if not verified.
