
@echo off
setlocal EnableDelayedExpansion

set "substring=version"
for /f "delims=," %%a in (test-form.json) do (
    set "string=%%a"
    if "!string:%substring%=!"=="!string!" (
        rem
    ) else (
        set data=!string!
        goto :endfor
    )
)
:endfor

rem Remove quotes
set data=%data:"=%
rem Change colon+space by equal-sign
set "data=%data:: ==%"

rem Separate parts at comma into individual assignments
set "%data:, =" & set "%"

echo we are generating proto classes (gRPC)
call npm run proto:generate:win

echo we are building ui version %version%

@RD /S /Q "dist"
call npm run-script build

ren dist\ui "ui-v%version%"

echo commit and push

endlocal
