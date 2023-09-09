The site is deployed on: https://eloquent-kulfi-c30cbe.netlify.app/

A simple client-server web application both with front-end and back-end (https://github.com/KseniaRI/triangulation-calc - node.js backend repository ) which display a simple cone in a 3D view.

The application provide the following functionality:

1. The user enter parameters (cone height, radius and number of segments on a circle). The data is transfering to the server.
2. The server compute triangulation of the cone (a set of triangles to be used for
   display) and pass it back to the client.
3. The client display computed triangulation in a 3D view using React-Three-Fiber library.
