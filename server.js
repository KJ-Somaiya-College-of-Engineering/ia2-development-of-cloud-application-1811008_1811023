const genreService = require('./routes/genres');
const movieService = require('./routes/movies');
const usersService = require('./routes/users');

var genre = genreService.listen(8081, () => console.log(`Server running on port 8081`));
var movie = movieService.listen(8080, () => console.log(`Server running on port 8080`));
var users = usersService.listen(8082, () => console.log(`Server running on port 8082`));