cmake_minimum_required(VERSION 2.8)

project (falcon1024)

set (CMAKE_CXX_STANDARD 11)

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/libaddon)

set(CMAKE_INSTALL_PREFIX ${CMAKE_SOURCE_DIR})

add_definitions(-DNAPI_VERSION=3)

set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)

include_directories(${CMAKE_JS_INC} src dep/falcon-1024/build/Release)

link_directories(${CMAKE_SOURCE_DIR}/src ${CMAKE_SOURCE_DIR}/dep/falcon-1024/build/Release)

file(GLOB SOURCE_FILES "src/*.cc" "src/*h")

add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} falcon-1024)

execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
        )
string(REPLACE "\n" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
target_include_directories(${PROJECT_NAME} PRIVATE ${NODE_ADDON_API_DIR})

install(TARGETS ${PROJECT_NAME} 
                    CONFIGURATIONS Release
                    LIBRARY DESTINATION "libaddon"
                    ARCHIVE DESTINATION "libaddon"
                    RUNTIME DESTINATION "libaddon"
                    COMPONENT library)

