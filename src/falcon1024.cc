#include "falcon1024.h"

Napi::Value createKeyPair(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

    Napi::Buffer<uint8_t> pk = info[0].As<Napi::Buffer<uint8_t>>();

    Napi::Buffer<uint8_t> sk = info[1].As<Napi::Buffer<uint8_t>>();

    keypair(pk.Data(),sk.Data());

    return Napi::Number::New(info.Env(), 0);

}

Napi::Value createSignature(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

  Napi::Buffer<uint8_t> sig = info[0].As<Napi::Buffer<uint8_t>>();

  Napi::Buffer<size_t> sigLen = info[1].As<Napi::Buffer<size_t>>();


  Napi::Buffer<uint8_t> m = info[2].As<Napi::Buffer<uint8_t>>();

  Napi::Buffer<uint8_t> sk = info[3].As<Napi::Buffer<uint8_t>>();

  sign(sig.Data(),sigLen.Data(),m.Data(), m.Length(), sk.Data()); 

  return Napi::Number::New(info.Env(), 0);

}

Napi::Value verifySignature(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

  Napi::Buffer<uint8_t> sig = info[0].As<Napi::Buffer<uint8_t>>();


  Napi::Buffer<uint8_t> m = info[1].As<Napi::Buffer<uint8_t>>();

  Napi::Buffer<uint8_t> pk = info[2].As<Napi::Buffer<uint8_t>>();

  int i = verify(sig.Data(), sig.Length(), m.Data(), m.Length(), pk.Data());

  return Napi::Number::New(info.Env(), i);

}




Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "createKeyPair"),
              Napi::Function::New(env, createKeyPair));
   exports.Set(Napi::String::New(env, "createSignature"),
              Napi::Function::New(env, createSignature));
  exports.Set(Napi::String::New(env, "verifySignature"),
              Napi::Function::New(env, verifySignature));
  return exports;
}

NODE_API_MODULE(falcon1024, Init)
