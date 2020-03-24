# Social Network Visualization Tool

## Setting up environment

**The instruction is based on macOS.**

1. Install elm and flask.
2. Install graph tools by using homebrew.
3. Reinstall every elm dependency according to the elm.json provided. Please backup the original file and copy a new fresh generated elm.json file for new elm project and then using `elm install` to install all the dependency according to the original elm.json file.
4. Setup flask. (by referring to the official doc)

**Make sure your python3 is correctly linked to homebrew!!!**

## Compile the frontend

Please ignore the official doc of elm. Run `elm make main.elm` in the static directory to compile .html file.

## Run

2. In the root directory, run `flask run`

## Project Structure
* src  
    - /elm: Dir for all the elm files.    
    - /js: Dir for all the JavaScript files.  
    - /css: Dir for all the css files.  
    - /data: Dir for all the data files.  
    - /rcs: Dir for all the images and other recourses.
