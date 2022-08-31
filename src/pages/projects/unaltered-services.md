---
layout: ../../layouts/project.astro
title: UNALTERED Services
client: UNALTERED Athletics
view: https://unalteredathletics.com
description: |
  A collection of microservices running on the UNALTERED website to drive customer engagement, review collection, and more.
stack:
 - jquery
 - php
 - mysql
 - mongodb
captions: ['Review Collection Form', 'Review Program - Personal Dashboard', 'Masterclass Course', 'Surveys']
images: ['/assets/review_collection_form.png', '/assets/review_program.png', '/assets/masterclass.png', '/assets/surveys.png']

---

## Overview
UNALTERED Services is a collection of microservices, web applications, and tools developed for various uses by UNALTERED Athletics. Originally, this suite of services was created to be embedded on a live Wordpress website, integrated with the Wordpress users MySQL database.

Overtime, the business needs expanded beyond what Wordpress could provide, and the website was moved onto a Shopify storefront. Along with that migration, I handled the conversion of the Wordpress plugin to a Shopify application. The various tools run on the website with JQuery, sending and retrieving data to and from PHP endpoints of the application API, with data being stored in a MongoDB database.

## Features
### Review Collection Form
This multi-page form is a lifeline of the business, as it is a primary driver of collecting product reviews and customer information. By inputting an order ID, the form will pull data related to that order so the customer can provide feedback about the product(s) they ordered, and on submission, automatically generate a Shopify order of a product of their choosing.

Powered by various PHP SDKs and libraries, the form is integrated with Amazon, Ebay, Walmart, and Shopify APIs to verify and retrieve order data. Submissions stored in the MongoDB database are accessible via the Admin dashboard.

### Masterclass
Taking inspiration from the popular online course provider, the UNALTERED Masterclass is integrated with Shopify's Customer API to provide value to customers in the form of a 9-part video course. Each module of the course has content managed via the [UNALTERED Admin dashboard](/projects/unaltered-admin).

It runs with JQuery on the front-end to handle module and quiz interactions, and PHP on the back-end for module authorization, progress management, and email notifications.

### Review Program
Invite-only dashboard customers used primarily for product launches, the Review Program allows for a streamlined process to collect reviews on a newly launched product. Members of the program can view and claim available products through their personal dashboard. Claim information, including status updates, order information, and product feedback are analyzed on the [UNALTERED Admin dashboard](/projects/unaltered-admin).

### Surveys
Surveys is a system developed to modularly build surveys to collect feedback about upcoming product interest, design, and more. Surveys are created with the [UNALTERED Admin dashboard](/projects/unaltered-admin) using a variety of question types such as multiple choice, rankings, and matrix. The responses and analyzed data can be viewed on the Admin dashboard.

### Nutrition Calculator / One Rep Max Calculator
Simple JQuery widgets that ask for inputs and uses a formula to calculate the user's caloric and macronutrient requirements, and one repetition max.

## Impact
UNALTERED Services has become a powerful asset to UNALTERED Athletics. With over 3000+ reviews collected, it is a key factor in the success of new and existing products across all sales channels. In addition, Surveys has been invaluable to conducting product research with the existing customer base.

Along with providing value to customers, the services are the primary source of data collection. Its integration with Mailchimp has resulted in over 5K+ email subscribers.