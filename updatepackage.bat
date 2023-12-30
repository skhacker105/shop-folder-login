@echo off
IF "%2"=="" cls
:: locations of all application
set baseLocation=D:\ShopFolderContainer\
set sharedLib=%baseLocation%SharedLibrary\
set sfLogin=%baseLocation%shop-folder-login\

:: other variables
set selectedLibrary=_

IF NOT "%1"=="" (set selectedLibrary=%1)
IF /i %selectedLibrary%==_ goto finalExit
echo Updating %selectedLibrary% in Login

cd %sfLogin%
CALL npm i %selectedLibrary%@latest

if NOT "%2"=="" cd %sharedLib%
if "%2"=="" cd %sfLogin%