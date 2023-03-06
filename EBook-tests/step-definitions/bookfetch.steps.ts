import { before, binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import axios from 'axios';
import cheerio from 'cheerio';


@binding()
export class ebookdetails {
  
	@given(/User login to the website as "([^"]*)" with "([^"]*)" is successful/)
		public websiteLogin(username: string, password: string): void {
		...
		// The step definition
		...
		}
  @when(/User click the first book with "([^"]*)" as the author/)
		public searchByAuthor(author: string): void {
		...
		// The step definition
		...
		}

  @then(/get book details for "([^"]*)"/)
  public getBookDetails(authorvar: string) {
    
	const url = '' //URL we're scraping
	const AxiosInstance = axios.create(); // Create a new Axios Instance

	// This is the structure of the player data we recieve
	interface PlayerData {
	  rank: number; // 1 - 20 rank
	  name: string;
	  nationality: string;
	  goals: number;
	}

	// Send an async HTTP Get request to the url
	AxiosInstance.get(url)
	  .then( // Once we have data returned ...
		response => {
		  const html = response.data; // Get the HTML from the HTTP request
		  const $ = cheerio.load(html); // Load the HTML string into cheerio
		  const statsTable: cheerio.Cheerio = $('.statsTableContainer > tr'); // Parse the HTML and extract just whatever code contains .statsTableContainer and has tr inside
		  const topScorers: PlayerData[] = [];
		
		  statsTable.each((i, elem) => {					
			const author: string = $(elem).find('.authorName').text(); // Parse the author name
			const booktitle: string = $(elem).find('.bookTitle').text(); // Parse the book title
			const price: number = parseInt($(elem).find('.rank > strong').text()); // parse the price
			if (author == authorvar){
				topScorers.push({
				  author,
				  booktitle,
				  price			  
				})
			}
		  })

		  console.log(topScorers);
		}
	  )
	  .catch(console.error); // Error handling
	  }
}
