@echo off
setlocal enabledelayedexpansion
set file=package.json
for %%i in ("%file%") do set file=%%~fi
echo.
set app_title=
set /p app_title= Title of your app: 

:: Replace params
for /f "delims=" %%i in ('type "%file%"') do (
    set str=%%i
    set "str=!str:___APP-TITLE___=%app_title%!"
    echo !str!>>"%file%".tmp
)

:: Save and backup
copy "%file%" "%file%".bkup >nul 2>nul
move "%file%".tmp "%file%"

:: Create new folder
mkdir "..\%app_title%"
copy ".\" "..\%app_title%"

:: Remove spare files
del "..\%app_title%\*.bkup" /Q
del "..\%app_title%\first-run.bat" /Q

:: Restore
move "%file%".bkup "%file%"

start "Install" /D "..\%app_title%\" "..\%app_title%\win-install.bat"