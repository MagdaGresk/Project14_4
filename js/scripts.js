var movies = [
	{
    	id: 1,
    	title: 'James Bond',
    	desc: 'about British spy',
    	image: src=('images/image1.jpg')
 	},
 	{
    	id: 2,
    	title: 'Pretty woman',
    	desc: 'romantic comedy',
    	image: src=('images/image2.jpg')
	},
 	{
  		id: 3,
  		title: 'Pippi Longstocking',
  		desc: 'the beloved story of a spunky young girl',
  		image: src=('images/image3.png')
	},
	{
		id: 4,
		title: 'Jaws',
		desc: 'thriller about a giant man-eating great white shark',
		image: src=('images/image4.jpg')
	}
]


var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title}),		
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {image: this.props.movie.image})
			)
		)
	}
})

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	}
})

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
})

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			React.createElement('img', {src: this.props.image})
		)
	}
})


var moviesElement = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, movie: movie}
	)
})

var MoviesList = React.createClass({
	render: function() {
		return (
			React.createElement('ul', {}, moviesElement)
		)
	}
})

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'my favorite movies'),
		React.createElement(MoviesList, {})
	)

ReactDOM.render(element, document.getElementById('app'))