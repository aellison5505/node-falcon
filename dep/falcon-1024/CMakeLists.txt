cmake_minimum_required(VERSION 2.8)

project (falcon-1024)

set (CMAKE_CXX_STANDARD 99)

#set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/../../src)

set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)

include_directories(src)

file(GLOB SOURCE_FILES "src/*.c" "src/*h")

add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES})

set_target_properties(${PROJECT_NAME} PROPERTIES LINKER_LANGUAGE C)


