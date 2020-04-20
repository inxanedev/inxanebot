@echo off
goto loop
:loop
call npm start
git pull
goto loop