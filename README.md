# EBI-Ensembl
JS client app to query Ensemble gene REST API

## Instructions
To run the application simply open the app.html file in a web browser (Google Chrome works best).

There are two search options:

1. The first search allows the user to enter a gene symbol name, sequence position and amino acid letter in the three separate text inputs.
2. The seconds search allows the user to enter search parameters in a single text input using HGVS notation.

The results of the search will be displayed below in a tabular format as per the screen image example below.

If there are no matching results then the results table will not be displayed.

![alt text](https://github.com/rdtek/ebi-ensembl/raw/master/AppScreen.png "Screen shot of app running in web browser.")

# Testing

To test this application I would first use the Ensembl website to collect correct data on a sample of genes.
I would then run my client app inputting the same gene symbols, sequence positions and amino acid letters.
Using this manual method the results of the client app could be compared the results from the Ensembl website to verify that they produce the same results.

For automated testing a programming script could be written to call the EnsemblApi.js module of my app and pass in various kinds of search queries for different genes, sequence positions and changes from one amino acid to another.
Several assertions could be made in the script to test different features including: checking the HTTP responses are OK, checking the number of sequences returned and checking the number of matching transcripts are correct.
