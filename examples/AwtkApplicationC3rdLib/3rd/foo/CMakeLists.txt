cmake_minimum_required(VERSION 3.8)

project(foo)

set(PROJECT_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

include_directories(${PROJECT_ROOT_PATH})

set(FOO_WEB_FLAGS "-Os ")
set(FOO_WEB_LINK_FLAGS " ")
file(GLOB FOO_SOURCE_FILES  *.c)

set(CMAKE_C_FLAGS "${FOO_FLAGS} ")
set(CMAKE_CXX_FLAGS "${FOO_FLAGS} ")

add_library(foo STATIC ${FOO_SOURCE_FILES})

