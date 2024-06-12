@ECHO OFF

python --version 3>NUL
if errorlevel 1 goto errorNoPython

ECHO * Server: http://localhost
python -m http.server -d build 80

goto:eof

:errorNoPython
echo Error^: Python not installed
