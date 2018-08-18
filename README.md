# Company Data Miner

## Design Overview

This is a program that ingests a user submitted JSON file containing data on companies and allows the user to run queries against the JSON data from the terminal command line. It returns the number of companies and the names of the companies that matched the query, or an error if the user inputs were invalid. The program will check if the JSON data to query is stored locally in the same directory - if it isn't it will check if the user entered a URL and attempt to fetch it. 

## Install Instructions

Unzip the files into your root directory. Open the directory on your code editor.

Navigate to the same directory in the terminal.
If you are starting in your root folder type the following:

```
cd your_directory_name/
```

Install dependencies with the command below:

```
npm install
```

This program is run with a bash script as defined in 'my_program'. If execute permissions were lost on 'my_program', you will need to add them back with the following:

```
chmod u+x ./my_program
```

## Running the Program

To run the program, you must type the following into your terminal while you are within the directory.

```
./my_program [file] [command] [argument]
```

### Parameters

**[file]** - The path to the JSON company data to query. This can be either a local file in the directory or a URL to JSON data.
**[argument]** - The value to check against the companies in the JSON data.
**[command]** - These are the currently supported commands:
* `locate`.  This instruction will allow us to find the list of companies by Location (state only).
		`e.g. : locate CA`
* `find_before`. This instruction will allow us to find the list of companies before a specific year.  This is an inclusive operation.
	`e.g.: find_before 1999`
	
* `find_after`. This instruction will allow us to find the list of companies after a specific year.  This is an inclusive operation
	`e.g.: find_after 2000`

* `find_companies_between_size`.  Find the list of companies based on the number of full time employees. `e.g. find_companies_between_size 1,001-5,000`. 
	* Possible Options:
	```
	['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+']
	```

* `find_type`.  Find all companies by the key `company_category`. `e.g. find_type Data/Technology'`
	* Possible categories are:
```
[’N/A’,
 'Aerospace and Defense',
 'Business & Legal Services',
 'Data/Technology',
 'Education',
 'Energy',
 'Environment & Weather',
 'Finance & Investment',
 'Food & Agriculture',
 'Geospatial/Mapping',
 'Governance',
 'Healthcare',
 'Housing/Real Estate',
 'Insurance',
 'Lifestyle & Consumer',
 'Media',
 'Research & Consulting',
 'Scientific Research',
 'Transportation']```
 
 ```

## Assumptions

* This solution assumes the JSON data to query is not particularly large.
* This solutions accounts for whether the user enters valid or invalid inputs. I did not think it was safe to leave invalid inputs unhandled.
* There is an assumption that the user is either fetching data from an outside URL to query against or is checking against a JSON file they have locally in the same directory.

## Testing

 Invalid data types are handled and will log to the user if there is an error. Mocha and Chai were used for testing. The currect tests check the functionality of the helpers and the primary data handler. To run the tests, type the following in the terminal while in this directory.

```
npm test
```

## Future Improvements

* For a large amount of data, the current solution may be very slow.
* Matches are stored in memory, and that would become an issue if there are millions of matches.
* In the case of large JSON data sets, space complexity would improve if a matched company name was simply logged to console and not stored. 
* Large data sets could be processed in batches, across a number of server instances. 
* In terms of big O notation, an unordered data set would at best be O(n) time complexity. 
