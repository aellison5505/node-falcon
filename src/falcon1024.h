#ifndef H_falcon1024
#define H_falcon1024

#ifdef __cplusplus
extern "C" {
#endif

#include "api.h"

#ifdef __cplusplus
}
#endif

#include <napi.h>

#define keypair PQCLEAN_FALCON1024_CLEAN_crypto_sign_keypair

#define sign PQCLEAN_FALCON1024_CLEAN_crypto_sign_signature

#define verify PQCLEAN_FALCON1024_CLEAN_crypto_sign_verify

#endif
