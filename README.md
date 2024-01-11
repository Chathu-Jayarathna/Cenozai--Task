# Excel Uploader

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
![image](https://github.com/Chathu-Jayarathna/Cenozai-Task/assets/124165734/6979d801-a674-4039-976f-70644a8ec4a4)

#### After Uploading Excel File
![image](https://github.com/Chathu-Jayarathna/Cenozai-Task/assets/124165734/dd238abe-d000-48a5-8750-63c211170843)

## Optional Backend Validation (Python)

### Requirements

- Python 3.x
- pandas library (`pip install pandas`)

### Usage

```bash
python validate_excel.py path/to/your/excel/file.xlsx
