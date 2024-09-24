import os
import requests
from bs4 import BeautifulSoup
import time


start_case_number = 298904
total_cases = 100
output_dir = 'casefiles'

def fetch_and_save_akomantoso(case_number):
    # Constructing the URL based on the case number
    url = f"https://kenyalaw.org/caselaw/cases/view/{case_number}/"
    
    try:
        # Fetching the page content
        response = requests.get(url)
        response.raise_for_status()  # Check for request errors
        
        # Parsing the HTML content
        soup = BeautifulSoup(response.content, "lxml")
        
        # Extracting the Akoma Ntoso section
        akoma_ntoso_section = soup.find("div", class_="akoma-ntoso")  # Adjust tag/class as necessary
        
        if akoma_ntoso_section:
            # Get the Akoma Ntoso XML content
            akoma_ntoso_xml = akoma_ntoso_section.get_text()
            
            # Generate a unique filename
            unique_filename = f"Case{case_number}.xml"
            file_path = os.path.join(output_dir, unique_filename)
            
            # Write the content to the file
            with open(file_path, "w", encoding="utf-8") as file:
                file.write(akoma_ntoso_xml)
            
            print(f"Akoma Ntoso content from {url} saved to {file_path}")
        else:
            print(f"Akoma Ntoso section not found in {url}")
    
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")

# Loop through the range of case numbers
for i in range(start_case_number, start_case_number - total_cases, -1):
    fetch_and_save_akomantoso(i)
    time.sleep(2)