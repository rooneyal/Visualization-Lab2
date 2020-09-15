// TODO: load the dataset 
function FilterData(category) {
	renderBarChart(category)
	console.log("FUNC");
};


let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
		attractions = data;
		const MaxLength = 5;
		let dataNew = (attractions.slice(0,MaxLength)) 
				FilterData(dataNew);
		let select = document.querySelector('.form-control');
		select.addEventListener('change', (event) => {
			if (event.target.value == null || event.target.value == 'all') {
				console.log(event.target.value);
				attractions.sort(function (a,b) {
					return a.visitors > b.visitors;
				});
				let data = (attractions.slice(0,MaxLength)) 
				FilterData(data);
				console.log("IF");
			}
			else {
				console.log(event.target.value);
				let filtered = attractions.filter(function(attractions){
					return event.target.value == attractions.Category;
				});
				filtered.sort(function (a,b) {
					return a.visitors > b.visitors;
				});
				let dataNew = (filtered.slice(0,MaxLength)) ;
				FilterData(dataNew);
				console.log("ELSE");
		}
	})});
	

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category