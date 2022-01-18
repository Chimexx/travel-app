import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
	params: {
		bl_latitude: "11.847676",
		tr_latitude: "12.838442",
		bl_longitude: "109.095887",
		tr_longitude: "109.149359",
		// restaurant_tagcategory_standalone: "10591",
		// restaurant_tagcategory: "10591",
		// limit: "30",
		// currency: "USD",
		// open_now: "false",
		// lunit: "km",
		// lang: "en_US",
	},
	headers: {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "23912de8f8msh4af35a2522f1b56p145ad1jsnddd5f590e54f",
	},
};

export const getPlacesData = async () => {
	try {
		const {
			data: { data },
		} = await axios.get(url, options);
		return data;
	} catch (error) {
		console.log(error);
	}
};
