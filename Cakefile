{exec} = require 'child_process'

task 'build', 'Build project from src/coffee/*.coffee to js/*.js', ->
  exec 'coffee --compile --output js/ src/coffee/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'watch', 'Build project from src/coffee/*.coffee to js/*.js', ->
  exec 'coffee --compile --watch --output js/ src/coffee/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

