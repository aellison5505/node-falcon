# This Makefile can be used with GNU Make or BSD Make

LIB=libfalcon-1024

SOURCES = codec.c common.c fft.c fpr.c keygen.c pqclean.c rng.c sign.c vrfy.c
OBJECTS = codec.o common.o fft.o fpr.o keygen.o pqclean.o rng.o sign.o vrfy.o fips202.o randombytes.o 
HEADERS = api.h fpr.h inner.h fips202.h randombytes.h

CFLAGS=-O3 -fPIC -Wall -Wconversion -Wextra -Wpedantic -Wvla -Werror -Wmissing-prototypes -Wredundant-decls -std=c99 -I../common $(EXTRAFLAGS)
SHARE=-shared

all: $(LIB)

%.o: %.c $(HEADERS)
	@mkdir -p obj
	$(CC) $(CFLAGS) -c $< -o obj/$@

$(LIB): $(OBJECTS)	
	@mkdir -p lib
	$(AR) -r lib/$@.a $(addprefix obj/,$(OBJECTS))
	$(CC) $(SHARE) $(addprefix obj/,$(OBJECTS)) -o lib/$@.so

install:
	cp -rf lib/*.so ./api.h ../../../src/

clean:
	rm -rdf obj/* obj
	rm -rdf  lib/* lib
	
