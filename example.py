import xml.etree.ElementTree as ET
import json

# Parse XML file
tree = ET.parse('casefiles/Case298904.xml')
root = tree.getroot()

# Create a function to recursively convert XML to a Python dictionary
def xml_to_dict(element):
    node = {}
    for child in element:
        node[child.tag] = xml_to_dict(child) if len(child) else child.text
    return node

data = xml_to_dict(root)

# Save the data as a JSON file
with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
