


file(GLOB SOURCE_FILES  "fips202.h" "randombytes.h" "fips202.c" "randombytes.c")

add_library(common OBJECT ${SOURCE_FILES})



