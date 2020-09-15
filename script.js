// TODO: load the dataset 

let attractions;
fetch(attractions.json)
    .then(response => response.json())
    .then(data => {
        attractions = data;

        function FilterData(category) {
			const MaxLength = 5;
			
            if (category == null || "all") {
				attractions.sort(function (a,b) {
					return a.visitors > b.visitors;
				});
				let data = (attractions.slice(0,MaxLength)) => {renderBarChart(data);}

			}
			
			else {
				let DiffAttractions = attractions.filter(attractions => attractions.category == category)
				.sort(function (a,b) {
					return a.visitors > b.visitors;
				});
				let data = (DiffAttractions.slice(0,MaxLength)) => {renderBarChart(data);}
			}
		}
		
		
        
    });

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