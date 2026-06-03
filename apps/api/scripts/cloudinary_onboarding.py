#!/usr/bin/env python3
"""Cloudinary onboarding: upload, metadata, and optimized delivery URL."""

import cloudinary
import cloudinary.api
import cloudinary.uploader

# Configure Cloudinary — replace placeholders before running locally
cloudinary.config(
    cloud_name="YOUR_CLOUD_NAME",  # ← replace this
    api_key="YOUR_API_KEY",  # ← replace this
    api_secret="YOUR_API_SECRET",  # ← replace this
    secure=True,
)

SAMPLE_IMAGE_URL = "https://res.cloudinary.com/demo/image/upload/sample.jpg"


def main() -> None:
    print("Uploading sample image from Cloudinary demo...")
    upload_result = cloudinary.uploader.upload(SAMPLE_IMAGE_URL)

    secure_url = upload_result["secure_url"]
    public_id = upload_result["public_id"]
    print(f"Secure URL: {secure_url}")
    print(f"Public ID: {public_id}")

    print("\nFetching image details...")
    resource = cloudinary.api.resource(public_id)
    print(f"Width: {resource['width']} px")
    print(f"Height: {resource['height']} px")
    print(f"Format: {resource['format']}")
    print(f"Bytes: {resource['bytes']}")

    # f_auto — best format for the visitor's browser (e.g. WebP/AVIF).
    # q_auto — balances quality and file size automatically.
    transformed_url = cloudinary.CloudinaryImage(public_id).build_url(
        fetch_format="auto",
        quality="auto",
    )

    print(
        "\nDone! Click link below to see optimized version of the image. "
        "Check the size and the format."
    )
    print(transformed_url)


if __name__ == "__main__":
    main()
