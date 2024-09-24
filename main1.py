import os
import requests
from bs4 import BeautifulSoup
import time
import random
import csv

start_case_number = 298904
total_cases = 100
output_dir = 'casefiles_csv'
csv_file = os.path.join(output_dir, 'all_cases_data.csv')

# Ensure the output directory exists
os.makedirs(output_dir, exist_ok=True)

# Function to fetch case details
def fetch_case_data(case_number):
    url = f"https://kenyalaw.org/caselaw/cases/view/{case_number}/"
    
    try:
        # Fetching the page content
        response = requests.get(url)
        response.raise_for_status()  # Check for request errors
        soup = BeautifulSoup(response.content, "lxml")
        
        # Extracting data from various sections
        full_text = soup.find("div", class_="akoma-ntoso")
        title = soup.find("div", class_="akn-div doc-title")
        docket_no = soup.find("div", class_="akn-div docket-number")
        judges = soup.find("div", class_="akn-div judges")
        date = soup.find("div", class_="akn-div doc-date")
        type_of_court = soup.find("div", class_="akn-div type_of_court")
        
        # Cleaning the data (e.g., removing extra whitespace)
        case_data = {
            "Case_Number": case_number,
            "Full_Text": full_text.get_text(strip=True) if full_text else "N/A",
            "Title": title.get_text(strip=True) if title else "N/A",
            "Docket_No": docket_no.get_text(strip=True) if docket_no else "N/A",
            "Judges": judges.get_text(strip=True) if judges else "N/A",
            "Date": date.get_text(strip=True) if date else "N/A",
            "type_of_court":type_of_court.get_text(strip=True) if type_of_court else "N/A"
        }
        
        return case_data
    
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

# Function to save the data to a single CSV file
def save_all_cases_to_csv(case_data_list, csv_file):
    fieldnames = ["Case_Number", "Full_Text", "Title", "Docket_No", "Judges", "Date", "type_of_court"]
    
    write_header = not os.path.exists(csv_file)  # Only write header if the file is new
    
    with open(csv_file, mode="a", newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        if write_header:
            writer.writeheader()  # Write header only if the file is new
        writer.writerows(case_data_list)
    
    print(f"All case data saved to {csv_file}")

# Main loop to fetch data for each case and save to one CSV file
case_data_list = []
for i in range(start_case_number, start_case_number - total_cases, -1):
    case_data = fetch_case_data(i)
    
    if case_data:
        case_data_list.append(case_data)
    
    # Random sleep between requests
    time.sleep(random.uniform(1, 3))

# Save all collected case data to a single CSV file
save_all_cases_to_csv(case_data_list, csv_file)