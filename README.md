# _Sundays Calculator_

#### _Unit Testing Practice for Epicodus_, _4 Feb. 2020_

#### By _**Michelle Morin, Brandan Sayarath**_

## Description

_This webpage determines how many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000) based on the following information:_
* _1 Jan 1900 was a Monday._
* _Thirty days has September, April, June and November. All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine. And on leap years, twenty-nine._
* _A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| --------------:|
| A year is not a leap year if it is not divisible by 4 | 1993 | false |
| A year is a leap year if it is divisible by 4 | 2004 | true |
| A year is not a leap year if it is divisible by 100 | 1900 | false |
| A year is a leap year if it is divisible by 400 | 2000 | true |
| Webpage determines number of days in 1900 based on whether 1900 was a leap year | 1900 | false |
| Webpage determines what day of week Jan 1 1901 was | 1 Jan 1901 | Tuesday |
| Webpage forms an array of all years between 1901 and 2000 | 1901, 2000 | [1901, ..., 2000] |
| Webpage forms an array of all leap years between 1901 and 2000 | [1901, ..., 2000] | Array of all years between 1901 and 2000 that are a leap year |
| Webpage forms an array of all non-leap years between 1901 and 2000 | [1901, ..., 2000] | Array of all years between 1901 and 2000 that are not a leap year |
| Webpage determines determines which day of week that each month starts on | Feb 1, 1901 | Friday |
| Webpage sums all first of month dates that are Sundays | nothing | large number |

## Setup/Installation Requirements

* _First, clone this repository to your desktop by navigating to the desktop in the Terminal (entering "cd desktop" in the Terminal) and then entering "git clone" followed by the url to this repository._
* _Once the project directory is cloned to your desktop, navigate to the directory in the terminal by entering "cd" followed by the name of this repository in the Terminal._
* _Confirm that you have navigated to the project directory by entering "pwd" in the Terminal._
* _Once you have navigated to the directory in the terminal, open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal)._
* _Open index.html in a browser of your choice (e.g., Google Chrome)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, npm, webpack, Jest_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin, Brandan Sayarath_**