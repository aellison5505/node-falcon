
set(CMAKE_POSITION_INDEPENDENT_CODE true)
set (CMAKE_C_STANDARD 99)

IF(WIN32)
    add_definitions(/nologo /O2 /W4 /wd4146 /WX)
ELSE()
    add_definitions(-O3 -Wall -Wconversion -Wextra -Wpedantic -Wvla -Werror -Wmissing-prototypes -Wredundant-decls -std=c99)
ENDIF()

project (falcon-1024 C)

include_directories(falcon-1024/clean common)

add_subdirectory(common)

add_subdirectory(falcon-1024/clean)
