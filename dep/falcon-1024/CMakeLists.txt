cmake_minimum_required(VERSION 2.8)
set(CMAKE_POSITION_INDEPENDENT_CODE true)
set (CMAKE_C_STANDARD 99)

project (falcon-1024 C)

#set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/../../src)

#set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)

include_directories(src)

file(GLOB SOURCE_FILES "src/*.c" "src/*h")

add_library(falcon-1024 OBJECT ${SOURCE_FILES})



