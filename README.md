# 🎬 Netflix AWS Serverless Backend

A simple serverless backend built on AWS that allows users to upload and retrieve movie information using REST APIs.

## 🚀 Project Overview

This project demonstrates how to build a serverless application using AWS services.

Users can:

- Upload movie details
- Store data in DynamoDB
- Retrieve all uploaded movies
- Access the backend through API Gateway

---

## 🏗️ AWS Architecture

API Gateway
↓
AWS Lambda
↓
Amazon DynamoDB

---

## ☁️ AWS Services Used

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- IAM
- GitHub

---

## 📂 Project Structure

```
Netflix-AWS-Clone/
│
├── UploadVideoFunction/
│   └── lambda_function.py
│
├── GetVideosFunction/
│   └── lambda_function.py
│
└── README.md
```

---

## 🔗 API Endpoints

### Upload Video

**POST**

```
/upload
```

Example Request

```json
{
  "videoId": "001",
  "title": "Interstellar",
  "uploader": "Aniket"
}
```

Example Response

```json
{
  "message": "Video information saved successfully!"
}
```

---

### Get Videos

**GET**

```
/videos
```

Example Response

```json
[
  {
    "videoId": "001",
    "title": "Interstellar",
    "uploader": "Aniket",
    "uploadTime": "2026-06-26 15:21:04"
  }
]
```

---

## 📦 DynamoDB Table

Table Name

```
NetflixVideos
```

Attributes

- videoId (Partition Key)
- title
- uploader
- uploadTime

---

## 💻 Technologies Used

- Python 3.13
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- GitHub

---

## 🎯 Features

- Serverless architecture
- REST API
- JSON request and response
- DynamoDB integration
- Easy to extend

---

## 👨‍💻 Author

**Aniket Wasnik**

GitHub:
https://github.com/WasnikAniket

---

## ⭐ Future Improvements

- Authentication using Amazon Cognito
- React frontend
- Search videos
- Delete videos
- Update video information
- Deploy frontend using Amazon S3
- CloudFront integration
