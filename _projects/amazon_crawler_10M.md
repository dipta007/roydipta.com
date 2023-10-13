---
layout: page
title: Amazon Crawler (10M+ products)
description: A crawler to scrape 1 million products using NodeJS & puppeteer
img: assets/img/project/amazon_crawler.jpeg
importance: 11
category: data-science
giscus_comments: true
github: https://github.com/dipta007/amazon-scrapper-1M-nodejs
github_stars: true
social_share: true
---

The project involves creating a distributed web scraping system to gather data from 1 million products. It utilizes 200 Google Compute Engine instances, each with 2 vCPUs and 7.5 GB of RAM, at a cost of $19 per hour for all 200 instances. The scraping process is initiated from the Google Cloud console using a provided script. The script deploys the instances, installs necessary dependencies, and employs a BFS-type technique to scrape 50 products from a pool of 10,000.

The time estimate to scrape 1 million products is roughly one hour per 5,000 products, so with 200 vCPUs, it would take approximately an hour. This can be made faster by optimizing parallel threading and increasing the budget. However, there is a challenge with missing data fields, with around 30-40% of products lacking some information, likely due to bugs in the scraper and handling various webpage layouts.

The cost for refreshing the inventory is estimated at $19-20, and it can be reduced by improving parallelism in the scraper. To scale this system to 10 million or 100 million items, the scraper needs to be robust, bug-free, and capable of handling various layouts. It should fully utilize parallelism, and the number of servers must increase proportionally. ElasticDB should be optimized for indexing and data refresh, and the server for ElasticDB should scale with data growth. Multi-processor programming may also be considered for efficient CPU utilization.

The project is built with Node.js as the core language and Puppeteer for headless web scraping. Shubhashis Roy Dipta is the author of this project.

GitHub Link: [https://github.com/dipta007/amazon-scrapper-1M-nodejs](https://github.com/dipta007/amazon-scrapper-1M-nodejs)
