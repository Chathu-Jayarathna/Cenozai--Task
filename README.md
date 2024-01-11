![Screenshot (306)](https://github.com/Chathu-Jayarathna/Cenozai-Task/assets/124165734/f8810c73-a440-4393-8401-81bf58e90f79)# Excel Uploader

A user-friendly page for uploading Excel files to update a database. This project is built using React, Typescript, and CSS. Optional backend validation is available using Python pandas.

## Front-end (React)

### Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm start`.

### Features

- Accepts only Excel files (.xlsx, .xls).
- Simulates API call for file upload.
- Provides feedback on successful upload or errors.

### Screenshots
#### Before Upload Excel File
![Screenshot (305)](https://github.com/Chathu-Jayarathna/Cenozai-Task/assets/124165734/91aa924b-7001-4492-9eb5-95ce3117291a)

#### After Uploading Excel File
![Screenshot (306)](https://github.com/Chathu-Jayarathna/Cenozai-Task/assets/124165734/46a012bc-2026-4bc7-aa67-c4e317ffc7cb)

## Optional Backend Validation (Python)

### Requirements

- Python 3.x
- pandas library (`pip install pandas`)

### Usage

```bash
python validate_excel.py path/to/your/excel/file.xlsx
