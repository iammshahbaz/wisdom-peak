# Real Estate Project Dashboard - CRUD API

## Project Overview

This project provides a set of CRUD (Create, Read, Update, Delete) APIs using Firebase Firestore to manage a real estate project dashboard. The APIs handle data related to developers, projects, towers, and series.

## Tech Stack

- **Backend:** Node.js with Express.js for routing.
- **Database:** Firebase Firestore for storing and retrieving data.

## API Endpoints

### Developer Management API

#### Create Developer
- **Endpoint:** `POST /developers`
- **Description:** Adds a new developer to Firestore.
- **Request Body:**
  ```json
  {
    "developerName": "ABC Developers",
    "address": "123 Street, City",
    "incorporationDate": "2020-01-01",
    "totalProjectsDelivered": 15,
    "totalSqFtDelivered": 100000,
    "reasonForChoosingDeveloper": "Reputable company",
    "websiteLink": "http://abcdevelopers.com"
  }
#### Read Developers

- **Endpoint:** `GET /developers`
- **Description:** Retrieves the list of all developers.


#### Update Developer

- **Endpoint:** `PATCH /developers`
- **Description:** Updates an existing developer's details.

#### Delete Developer

- **Endpoint:** `DELETE /developers/`
- **Description:** Removes a developer from the database.

### Project Management API

## Create Project

- **Endpoint:** `POST /projects`
- **Description:** Adds a new project.
- **Request Body:**
 ```json
{
  "projectDetails": "Luxury Apartments in Downtown",
  "reraStatus": true,
  "financials": {
    "budget": 5000000,
    "expenditure": 2000000
  },
  "media": [
    "http://example.com/image1.jpg",
    "http://example.com/image2.jpg"
  ]
}

## Read Projects

- **Endpoint:** `GET /projects`
- **Description:** Retrieves the list of all projects.

## Update Project

- **Endpoint:** `PATCH /projects/:id`
- **Description:** Updates an existing project's information.

### Delete Project

- **Endpoint:** `DELETE /projects/:id`
- **Description:** Deletes a project from Firestore.


### Tower Management API

#### Create Tower

- **Endpoint:** `POST /towers`
- **Description:** Adds a new tower.
- **Request Body:**

```json
{
  "projectId": "project_id",
  "developerId": "developer_id",
  "towerNumber": 1,
  "towerName": "Tower A",
  "towerPhase": "Phase 1",
  "phaseReraNumber": "RERA1234",
  "deliveryTimeline": "2025-12-31",
  "currentStatus": "Under Construction",
  "duplicateTowerOption": false,
  "totalFloors": 20,
  "towerCoreDetails": {
    "totalApartments": 100,
    "parkingLevels": 2,
    "lobby": true,
    "terrace": true
  }
}

#### Read Towers

- **Endpoint:** `GET /towers`
- **Description:** Retrieves the list of all towers.

#### Update Tower

- **Endpoint:** `PATCH /towers/:id`
- **Description:** Updates an existing tower’s details.

#### Delete Tower

- **Endpoint:** `DELETE /towers/:id`
- **Description:** Deletes a tower from Firestore.

### Series Management API

#### Create Series

- **Endpoint:** `POST /series`
- **Description:** Adds a new series to a selected tower.
- **Request Body:**

```json
{
  "seriesName": "2 BHK Deluxe",
  "towerId": "tower_id",
  "seriesTypology": "2 BHK",
  "seriesDetails": {
    "bed": 2,
    "dimension": "1200 sq ft",
    "bath": 2,
    "direction": "East"
  },
  "addOns": ["Utility", "Terrace"]
}

#### Read Series

- **Endpoint:** `GET /series`
- **Description:** Retrieves all series or a specific series within a tower.

#### Update Series

- **Endpoint:** `PATCH /series/:id`
- **Description:** Updates the details of an existing series.

#### Delete Series

- **Endpoint:** `DELETE /series/:id`
- **Description:** Deletes a series from Firestore.

### Testing

You can use tools like Postman or ThunderClient to test the API endpoints.


