# shuttle-button

## Introduction
A Tasker button for finding the Harvard shuttle times for the stop closest to you. The button works by querying your location based on GPS, matching it to the closest stop of Harvard's shuttle service (currently only supports the Quad, Memorial Hall, and Widener Gate stops) and texts you the upcoming shuttle arrival times.

## Installation
1. The Tasker application is required to install this button. It can be found [here](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en).
2. Download this repository and a ZIP file to your phone.
3. Unpack the ZIP file using your preferred file management application. I use [File Commander](https://play.google.com/store/apps/details?id=com.mobisystems.fileman&hl=en). Make sure to save it to an easily reachable directory.
4. Open Tasker and select the Tasks tab. Tap on the tab again to bring up the option to import and navigate to the previously used directory to find the .tsk.xml file containing the task information.
5. Repeat with the Scenes tab to find the .sce.xml file containing the scene information.
6. Go back to the imported Task and tap on the Javascript action. The path needs to be changed to whatever directory you put the files in before. Press the magnifying glass icon to browse for the javascript file named ~shuttle.js~.
7. Go to your homescreen and hold down on an empty square to bring up the option to add a widget. Scroll to the Tasker section and choose the widget that allows you to activate a task. Place that on on of your home screens and select the "Shuttle" task and its reference.

## Usage
1. Tap the button with a blue flag on your home screen to activate the task.
2. If setup properly, it will text you within 10 seconds with the upcoming shuttle times.
