cmake_minimum_required(VERSION 2.8)

add_definitions(-DNAPI_EXPERIMENTAL)
add_definitions(-DNAPI_VERSION=3)

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/lib)

project (node-falcon CXX)

add_subdirectory(${CMAKE_SOURCE_DIR}/dep/falcon-1024)

#file(GLOB SOURCE_FILES "src/*.cc" "src/*.h" "dep/falcon-1024/src/*.c" "dep/falcon-1024/src/*.h")
file(GLOB SOURCE_FILES "src/*.cc" "src/*.h")

include_directories(${CMAKE_JS_INC})

add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC} $<TARGET_OBJECTS:falcon-1024>)

set_property(TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD 11)

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB})

execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
        )
string(REPLACE "\n" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
target_include_directories(${PROJECT_NAME} PRIVATE ${NODE_ADDON_API_DIR})

install(TARGETS ${PROJECT_NAME} 
                    CONFIGURATIONS Release
                    LIBRARY DESTINATION "lib"
                    ARCHIVE DESTINATION "lib"
                    RUNTIME DESTINATION "lib"
                    COMPONENT library)

