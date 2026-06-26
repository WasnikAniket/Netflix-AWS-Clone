import json
import boto3
from datetime import datetime

# Connect to DynamoDB
dynamodb = boto3.resource('dynamodb')

# Your table name
table = dynamodb.Table('NetflixVideos')


def lambda_handler(event, context):

    body = json.loads(event["body"])

    video_id = body["videoId"]
    title = body["title"]
    uploader = body["uploader"]

    upload_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    table.put_item(
        Item={
            "videoId": video_id,
            "title": title,
            "uploader": uploader,
            "uploadTime": upload_time
        }
    )

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Video information saved successfully!"
        })
    }