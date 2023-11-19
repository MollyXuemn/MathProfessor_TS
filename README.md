# Overview

This is a class check application that allows you to determine whether a class has been cancelled based on arrival times. It also provides the percentage of time the class was cancelled during a week.


## Getting Started

### Prerequisites

- You need to install the following software:
  - TypeScript 4.6.4
  - Jest 29.7.0


### Installation

1. Clone the repo
   ```shell
   git clone git@github.com:MollyXuemn/MathProfessor_TS.git
   ```
2. Build the project
    ```shell
   npm install
   ```

3. Install Jest (With VSCode)
    
    You can install Jest using your favorite package manager:
    ```shell
   npm install --save-dev jest
   ```
   
  

### Test API

1. Launch the test by command
    ```shell
   npx jest
   ```
   
- Class Status

1.  You can test if a class has been cancelled via the   `classStatus.test `. 
    
    Adjust the test case by modifying the following field:
    
    
    ```shell
    const times = [-2, -1, 0, 1, 2];
    ```
    Run the test:

    ```shell
    npx jest classStatus.test.ts
    ```
    
- Week Status

2.  You can test the percentage of cancelled class in a week via `weekStatus.test` .

     Adjust the test case by modifying the following field:

    ```shell
     const weekTimes = [
            [-2, -1, 0, 1, 2],
            [-2, -2, 0, 1, 2],
            [1, 2, 3, 4, 5],
        ];
    ```
    Run the test:

    ```shell
    npx jest weekStatus.test.ts
    ```




