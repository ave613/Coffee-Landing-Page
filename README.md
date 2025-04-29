# MayMyo Fresh Website

## Project Description
The **MayMyo Fresh Website** is a static website built using HTML, CSS, and JavaScript to showcase MayMyo Fresh coffee products. It includes various sections such as **Home**, **Products**, **Blog**, **Testimonials**, **FAQ**, and **Contact**. The website is designed to be responsive, user-friendly, and visually appealing, ensuring a smooth browsing experience across all devices.

This project is part of my **AWS Cloud** learning journey and demonstrates my ability to host static websites on **Amazon S3** and distribute content globally using **CloudFront CDN**.

---

## Technologies Used
- **HTML5** – for structuring the content
- **CSS3** – for styling the pages
- **JavaScript (Vanilla)** – for interactivity
- **AWS S3 Bucket** – for static website hosting
- **AWS CloudFront** – for content distribution 

---

## Deployment Details
- **Storage:** Amazon S3 Bucket (Static Website Hosting)
- **Content Delivery Network:** AWS CloudFront
- **Public Access:** Configured S3 bucket with restricted access; CloudFront serves the files securely

---

## Hosting and Distribution Setup
1. **Created S3 Bucket** for website files (index.html, style.css, etc.)
2. **Uploaded all static files** to S3
3. **Configured S3** for static website hosting (index and error documents set)
4. **Created CloudFront Distribution:**
   - Origin set to the S3 Bucket.
   - Caching optimized for static assets (images, videos, CSS, JS).
5. **Set S3 Bucket Policy** to allow access only via CloudFront OAI (Origin Access Identity) for security.

---

## Learning Objectives
- Building and hosting a static website on **AWS S3**
- Configuring **CloudFront** for global content delivery
- Setting up **HTTPS** and custom domains
- Understanding **S3 bucket policies**, **IAM permissions**, and **security best practices**
- Preparing for real-world cloud projects in static hosting and CDN usage

---

