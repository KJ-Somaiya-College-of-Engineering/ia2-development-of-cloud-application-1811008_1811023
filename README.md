# iCinema
A Full stack MERN website for movie theatres where user can search for movies and filter by rating and genres that are available,
and admin can add movie to the list and much more.
<img width="1438" alt="ss" src="https://user-images.githubusercontent.com/25881325/67157291-7e05dc00-f32a-11e9-8d0e-00e6ecda5b7d.png">

<h2>Installation </h2>
Setup the project and install the packages by running: 
```bash
npm run setup
```

To run the project:
```bash
npm start
```
Project wont start Frontend as it's configured for AWS and only backend services might start. TO use locally replace all the http links like:<br>
http://Icinemaapp-env.eba-sa9jvi5c.ap-south-1.elasticbeanstalk.com:8082
to <br>
localhost:<"service-port"> <br>
And change the ports in server.js File as well.
 
<h2> Built with  </h2>
<ul>
  <li>FrontEnd: <b> React.JS, Bootstrap, HTML/CSS </b></li>
  <li>Backend:  <b> Node.JS, Express.JS </b> </li>
  <li>Database: <b> MongoDB, Mongoose(NPM) </b> </li>
</ul>

<h2> API - Backend Services </h2>
<h4> User Services </h4>
<ul>
  <li> <b>POST</b> /api/users/signup </li>
  <li> <b>POST</b>  /api/users/login  </li>
</ul>

<h4> Movies Services</h4>
<ul>
  <li> <b>GET</b> /api/movies </li>
  <li> <b>POST</b> /api/movies/addmovie </li>
  <li> <b>DELETE</b> /api/movies/:movieID </li>
</ul>

<h4> Genres Services</h4>
<ul>
  <li> <b>GET</b> /api/genres </li>
  <li> <b>POST</b> /api/genres/addgenre </li>
</ul>
