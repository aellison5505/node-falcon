
<a name="readmemd"></a>

**node-falcon**

> README / [Globals](#globalsmd)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/aellison5505/node-falcon/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/aellison5505/node-falcon/tree/master)

### Requirements
* CMake with buildtools for your OS.
* NodeJS
* Typescript - optional


<a name="classes_index_falcon1024md"></a>

**node-falcon**

> [README](#readmemd) / [Globals](#globalsmd) / ["index"](#modules_index_md) / Falcon1024

# Class: Falcon1024

Promise interface for Post Quantum falcon 1024 signature algorithm.
Dependency code acquired from PQClean
https://github.com/PQClean/PQClean

## Hierarchy

* **Falcon1024**

## Index

### Methods

* [createKeys](#createkeys)
* [createSignature](#createsignature)
* [verifySignature](#verifysignature)

## Methods

### createKeys

▸ **createKeys**(): Promise\<[keys](#interfaces_index_keysmd)>

*Defined in [index.ts:23](https://github.com/aellison5505/faclon-node/blob/06bd32b/src/index.ts#L23)*

Create key pair for signature.

**Returns:** Promise\<[keys](#interfaces_index_keysmd)>

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


<a name="globalsmd"></a>

**node-falcon**

> [README](#readmemd) / Globals

# node-falcon

## Index

### Modules

* ["index"](#modules_index_md)


<a name="interfaces_index_keysmd"></a>

**node-falcon**

> [README](#readmemd) / [Globals](#globalsmd) / ["index"](#modules_index_md) / keys

# Interface: keys

Key pair for falcon 1024 signature.

## Hierarchy

* **keys**

## Index

### Properties

* [privateKey](#privatekey)
* [publicKey](#publickey)

## Properties

### privateKey

•  **privateKey**: Buffer

*Defined in [index.ts:9](https://github.com/aellison5505/faclon-node/blob/06bd32b/src/index.ts#L9)*

___

### publicKey

•  **publicKey**: Buffer

*Defined in [index.ts:8](https://github.com/aellison5505/faclon-node/blob/06bd32b/src/index.ts#L8)*


<a name="modules_index_md"></a>

**node-falcon**

> [README](#readmemd) / [Globals](#globalsmd) / "index"

# Module: "index"

## Index

### Classes

* [Falcon1024](#classes_index_falcon1024md)

### Interfaces

* [keys](#interfaces_index_keysmd)
