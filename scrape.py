import requests
from bs4 import BeautifulSoup
import csv

# Function to scrape data from a single page
def scrape_case_metadata(url):
    # Send a request to the page
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code != 200:
        print(f"Failed to retrieve the page: {url}")
        return None
    
    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Target the specific div that contains the case metadata
    case_meta_div = soup.find('div', id='case_meta')
    
    # If the div is not found, return None
    if not case_meta_div:
        print(f"Metadata section not found on {url}")
        return None
    
    # Extract case metadata from the table inside the div
    case_data = {}
    
    def get_field(label):
        """Helper function to safely extract a field from the metadata table."""
        try:
            th = case_meta_div.find('th', string=lambda text: text and label.lower() in text.lower())
            td = th.find_next('td') if th else None
            return td.text.strip() if td and td.text.strip() else 'N/A'
        except AttributeError:
            return 'N/A'  # If the field is not found or empty, return 'N/A'
    
    # Safely extract each field using the helper function
    case_data['Case Number'] = get_field('Case Number')
    case_data['Parties'] = get_field('Parties')
    case_data['Date Delivered'] = get_field('Date Delivered')
    case_data['Court'] = get_field('Court')
    case_data['Case Action'] = get_field('Case Action')
    case_data['Judge(s)'] = get_field('Judge(s)')
    case_data['Citation'] = get_field('Citation')
    case_data['County'] = get_field('County')
    
    # Extract full case text
    full_text_div = soup.find("div", class_="akoma-ntoso")
    if full_text_div:
        # Extract full case text, joining the paragraphs with newline characters
        full_text = full_text_div.get_text(separator="\n").strip()
    else:
        full_text = 'N/A'
    
    # Add full text to case_data
    case_data['Full Text'] = full_text
    
    return case_data

# Specify the initial case number
initial_case_number = 299031

# Number of pages you want to scrape
num_pages_to_scrape = 200

# Base URL for the case
base_url = "https://kenyalaw.org/caselaw/cases/view/"

# Specify the CSV file name
csv_file = "cases_data1.csv"

# Open CSV file and write the header
with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    
    # Write the header (including Full Text)
    writer.writerow(["Case Number", "Parties", "Date Delivered","Court", "Case Action", "Judge(s)", "Citation", "County", "Full Text"])
    
    # Loop through the pages, decrementing the case number each time
    for i in range(num_pages_to_scrape):
        # Generate the URL for the current case number
        case_number = initial_case_number - i
        url = f"{base_url}{case_number}/"
        
        # Scrape data from the URL
        case_data = scrape_case_metadata(url)
        
        # Write data to CSV if scraping was successful
        if case_data:
            writer.writerow(case_data.values())
            print('succesful')
        else:
            print(f"Error extracting data from {url}")

print(f"Data from all pages saved to {csv_file}")