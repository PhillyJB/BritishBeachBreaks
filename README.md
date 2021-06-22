# British Beach Breaks

## UX - User Experience
BritishBeachBreaks (BBB) is a fantastic site created to help Users find a great British seaside to take a well-deserved vacation. The site allows users to explore a range of seaside destination offering an experience that caters to their needs and reveals the hidden gems of the British coast. The site allows users to get information about potential destinations like if the beach is a sandy, pebble or shingle beach as well as local activities and facilities. 

BBB helps to bring to light the great offerings of British beach locations as an alternative to people going abroad to seek a fulfilling vacation. Users are able to see that the UK offers a lot of the great thrills and enjoyment we seek abroad.

## FEATURES

### Existing Features
##### Site Navigation
On the top of all the pages is the sites navigation bar which had the site logo (which is clickable and links back to the homepage on all pages) on the left and to the right the navigation links for Home and all the beach regions – North England, South England, Ireland, Scotland and Wales.
Note: At breakpoints of screen sizes less than 992px (Large Classification is 992px and above) the navigation icons are minimised into a 3 line icon/sandwich. If clicked it revealed the navigation options.

##### Home Page
An image carousel of select beaches is active on the top of the homepage and this cycles through the images continuously.
User lands on home page and is presented with an introductory paragraph of what the website is about. The user is also able to see a Google map with all the beach locations presented in their clusters. Above the map the user can click on any button that will direct them to the whole list of beaches on the site arranged in their regions.
On scrolling down the user is asked to select a region to explore further from the 5 regions available.

##### Region Pages – North England, South England, Ireland, Scotland & Wales
On selecting a region either from the top navigation bar or via selecting a region on the homepage, a user lands on a region page which has a paragraph with some information. Also on the page there is a Google map similar to the one on the homepage but this time it only displays markers for the beaches in that specific region.

* Beach Cards - 
On scrolling down the user is presented with the individual beach cards for each beach location. The cards have a beach image on the top and a breakdown of the beach’s features which is revealed via clicking on the “more info” button below the name and sub information snippet of the beach. This expanded information can then be reduced by clicking on the less info button. Only the beach card “more info” button clicked in is expanded.


* URLs/Links -  
To potential service providers in a particular destination - for example - If a user after reading a beach description feels it would be a great location to visit. There are hyperlinks to potential service providers like hotels, holiday package organisers and so on.

##### Footer Section
These are the sections found in the footer of all pages of the site.
* Contact Us Page –
This link takes a user the contact us page which is a form user can fill out to get in touch with the website admin. Users can send a message with whatever query they have and leave an email address and name for the site admin to get in touch with them.

* All beaches list/Booking Agencies list-
This link take the user to a page with all the beaches listed alphabetically within their regions. The list items of the beaches are clickable and at the moment take the user the region page that that particular beach is located on.

Booking Agencies Page - This page is a list of partners the site will partner with to offer site user great deals in booking breaks and other activities while on vacations or days out. The list at the moment is of random holiday booking sites to just display userability but moving forward this list will be active with confirmed partners. 

* Find and Follow Us
The social media icons are displayed here and at the moment clicking on any takes the user to the homepage of that social media provider. 


### Future Features
##### Search/ filtering feature
* User will be able to search or narrow their beach search selection using their postcode in an input field. 
User will be able to after providing their postcode, arrange the different beaches in order of preferecence. Which could include distance (closest to furthest or vice versa), alphabetically as well as specific region of the UK. Also other filters will be added like the ability to only display Sand or pebble beaches,  dog friendly or activities offered like surfing, sailing etc. There will be an advanced search feature which will allow the user to select which search criteria they want the beach to meet.

##### Advertisement sections
* Include Advertisment and sponsorship deals sections on each beach page which will generate income for the site. Users will be bale to see potential offers in a region of interest while reading up on the location and these paid advertisements links will take a user to the service providers page to book the deal they want.

##### Increase amount of beaches on site
* Increase the quantity of beaches available on the site using an adequate API and tools to display to the user. Then have a top 10 rated category for each region so users can narrow down their choices of ideal beaches to choose from. Further dissect beach regions into sub categories of smaller regions. This could be in the form of counties or districts. So from major regions like north England we would go into sub categories like West Sussex, East Sussex Devon etc.
Each beach to have increased photos on a click basis carousel to show user a wider range of perspectives on that particular beach.

##### Beach rating system and Comments Section
A beach rating and comment section will be added to the site. The rating system will allow users who have been to the beach to rate their experience of the beach in terms of different criteria and this will generate an average score for the beach which will be out of 10 stars. The ability to leave comments on the beach will also be added to give interested users an idea of other people s experiences.
Users will be able to see potential offers in a region of interest while reading up on the location and these paid advertisements links will take a user to the service providers page to book the deal they want.

##### Automate the beach count.
Automate the count of total beaches on the website and have this rendered in the button on homepage total count above the main map each time a new beach is added to the list.

##### Weather Forecast feature for a beach
Weather Forecast for the region and beach selected displayed for the user. Use an adequate API to link up to date weather information for an area so a user is not forced to go to another app to check the weather forecast for their potential visit.

##### Admin Email connection
Connect Email receiving service which allow contact us forms to be sent by site users to a valid email address.

##### Social Media Presence
The social media links will become active and take users to the home pages of each of the BritishBeachBreaks social media accounts and not just the social media provider homepage at currently.

## TECHNOLOGIES USED
#### Languages
HTML5 
CSS3
Javascript

#### Frameworks and tools
[JQuery](https://cdnjs.com/libraries/jquery)
[Bootsrap4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
[W3schools](https://www.w3schools.com/)

#### Fonts and Icons
[Font awesome](https://fontawesome.com/)
[Google fonts](https://fonts.google.com/)

#### APIs
Googlemaps API – from [Google Cloud](https://console.cloud.google.com/)


## TESTING
* **1-Problem** - 
Adding the JQuery slideToggle feature to the beach icons - this caused some difficulty as initially adding the feature to the cards by using the”.onclick” method of the “more info” button would cause all the cards to slideToggle() despite only clicking on one button.  

* **1-Solution** - in orderto isolate each individual card and not have to repeat the JS code meant I had to create a variable and using the "this" keyword allowed for me to target relevant card text <p> element. In addition to the use of this “this” keyword, added necessary classes to the beach card text areas and images in order to synchronise the on click actions properly.


* **2-Problem** - rendering the array of markers on the Google maps was not working even though I felt I had read through my code very carefully.
* **2-Solution** – Initially tried to rewrite the initMap function to look exactly like the example in the Google maps documentation but this still did not work. I then went through the code and realised was missing the “https” at front of the src URL in the script tag on the html and the:

markerclusterer/markerclusterer.js"
	
 While the marker clusterer in the sscript.js file does not need this and so the src/URL in this ends as. Also it should be noted that he marker clusters URL on the html page ends with the:

markerclusterer/m

  Correcting these very slight differences seemed to solve the problem for all the maps.

* **3-Problem** - changing the “More Info” button to “Less Info” button on clicking and vice versa is causing an issue. I am able to change the status to “less info” on clicking but then it remains as “less info”
* **3-solution** – I had an idea to use an if-else statement but was not completely sure on how to incorporate this. I went onto stack overflow which guided me with this and was able to add this feature to the buttons:


```let $this = $(this);
    $this.toggleClass("more-info");
    if($this.hasClass("more-info")){
        $this.text("More Info");
    } else {
        $this.text("Less Info");
    }```


* **4-Problem** – Difficulty getting the carousel to work – the image remains on the “active” image on the landing page and does not allow for transition through the image items I have added.
* **4-Solution** - Looking at the console in the Google DevTool inspection it seems to be a GET error 404 related to a “favicon”. I have tried to solve this doing my research and advised to add a link into the head of my html page. 

<link rel="icon" href="data:;base64,iVBORw0KGgo=">


This link was obtained from a [stack overflow interaction](https://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests).

Along with some other links but all seem to not have solved this problem. To rule out other issues further I have gone on to a competitors website to see if their carousel is working and as it seems there one is working fine which rules out me thinking it was a Google chrome issue. However this could still be a Google chrome compatibility issue with the bootstrap4 carousel I am using.
**Carousel Bug Finally fixed** – It seems that I had to add the js CDN script from bootstrap to my index.html document for the carousel to work. 

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous">
    </script>
```

I read through the bootstrap documentation again carefully and copied and pasted the bootstrap script. On refresh the carousel began to work.

* **5-Problem** – problem with getting the display of the region buttons on the home page to be spaced evenly as look more presentable tried several margin property tricks and spacing but nothing was working
* **5-Solution** – In the end after looking up some information using w3school and www.css/tricks/com - came to the decision to use the flex properties like flex wrap, justify content and display – flex (can be seen in the style.css file under the region icons sections.

* **6-Problem** – Trying to get the individual Google maps on each page to show only the markers for beaches in that region. The function (initMap()) that is called from script tags In the URL was only able to call the map with the markers of all the beaches as on the homepage.
* **6-Solution** – Initially I tried to write a new variable within the function similar to this:
function initMap() {
    var map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 4.8,
        center: { lat: 54.4697, lng: -5.0689}  });
Plus change the “var map” to a new variable (for example mapNorth) as well as changing the target the div id for the map to another name like #google-map-north. However this did not work.
The solution to this issue was to create a new function for each page and input into it the new id name for each div id on the relative region page. On top of this I then had to input only the coordinates for the markers I wanted to display respective of the region as shown below:

```function northMap(){
    var map = new google.maps.Map(document.getElementById("google-map-north"), {
        zoom: 6,
        center: { lat: 54.4697, lng: -5.0689}
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [ 
        {lat: 55.6069, lng: -1.6944},
        {lat: 53.7875, lng: -3.0533},
        {lat: 53.5639, lng: -3.1003},
        {lat: 54.4903, lng: -3.6062},
        {lat: 53.3723, lng: -3.1902},
        {lat: 54.4911, lng: -0.6162},
    ];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}```

This manage to solve the map issue. However this code is currently long winded and will require refactoring to make insertion of new marker easier. Also an overall function with some automation should be able to take the region page and insert the necessary information without needed to write out individual functions. This is currently being looked at and could be implemented in following features.

#### Validating the code with W3 validator – [HTML](https://validator.w3.org/)
Closing div tag was </div> was found to be missing for all my html pages for the main container-fluid div. This was immediately amended on all pages and the errors were clear.
Validator came back with all pages clear.

#### Validating the code with W3 validator – [CSS](https://jigsaw.w3.org/css-validator/)
All checks have been passed no errors.

### User Test Scenarios

##### User A
User A wants to find a beach in North England (or other major region of 5)
User A types in britishbeachbreaks.co.uk
-	User A lands on home page and reads introductory information
-	User is using a mobile so the navigation bar is minimised to a 3 line icon which is expandable to reveal the navigation options which is what they do to expand this
-	User immediately clicks on north England in the navigation icon and this takes them to north England page where they see the markers on the Google maps for all the north England beaches.
-	User then scrolls down to look through the beaches and what they offer by expanding individual beach cards using “more info” and reading through.
-	User comes across a beach which is near them and on top of that has activities which meet their criteria i.e. dog friendly and surfing are available.
-	User then sees the great deal links at the bottom of the beach information card and decides to check out the deal offers site. Clicking on the link open a new tab for the booking agency which the user then explores.

##### User B
User B wants to contact us with a query they have in regards to one of the activities listed on the beach
-	User B is on the home page of the site
-	User B scrolls down to the bottom of the page to the footer section and sees under Other Info section of the footer the “Contact Us” link which they click on
-	User is taken on the contact us page where they fill out the form with all its required categories
-	User then clicks the send button on completing the form
-	The user is then displayed an alert to indicate the form as been send and we will be in touch soon.
-	On clicking “OK” on the alert the contact us form us refreshed and all the information entered is cleared. User is then able to send another form if so wanted as they remain on the contact us page.

##### User C
User C is already on site and wants to investigate the map for a region further.
-	User C is already on the page for south England and had come across as Brighton is a suitable destination to visit.
-	User C then goes to the map above and zooms in on the map to investigate the location of Brighton and its surroundings.
-	User expands the map using the positive icon on the map then minimises to look further out.
-	On their mobile the user is able to use their fingers on the phone touch screen to zoom the map in our out to the necessary area.


## DEPLOYMENT
Project was developed using gitpod and was regularly commited to git and pushed up to github.

* To work on the project code within a local development environment:

    * Follow this link to BritishBeachBreak repository https://github.com/PhillyJB/milestone-project2-british-beach-breaks

    * Under the repository name you have the option to click on 'Go to file' and select a specific file in by doing a search or click the 'Code' Icon which should then have a drop down menu and from there you can clone or download a zip of the files or 'Open with Github Desktop'
    * Cloning would mean copying the clone URL from the clone HTTPS section.
    * This clone URL can then be pasted in to the directory you want the file to go in using the 'git clone' followed by the url.

* The deployment was carried out as follows onto GitHub Pages:

    * Entered my GitHub account,
    * Select the milestone-project1-peabahealth repository
    * Click on the 'Settings' I con above the repository Master File
    * Within 'Settings' Options Scroll down and clikc on the 'Pages' item
    * Under GitHub Pages go to 'Source' heading and change none to 'master' branch
    * Click on save - pleae note no them is chosen for this site under the 'Theme Chooser' section.
    * The deployed site is available via clicking here PeabaHealth or https://phillyjb.github.io/milestone-project2-british-beach-breaks/


## CREDITS

* Card Feature for displaying the different beaches in each region is taken from bootstrap4’s [Components-Card](https://getbootstrap.com/docs/5.0/components/card/).

* Landing Page Carousel displaying a range of pictures from the range of pictures taken from bootstrap4’s [Components-Carousel](https://getbootstrap.com/docs/5.0/components/carousel/).

* Several Images used in the Beach Card images on all region pages were taken from:
    * -[thebeachguide.co.uk](https://www.thebeachguide.co.uk/)
    * -[discovernorthernireland.com](https://www.discovernorthernireland.com/) – portstewart strand – Ireland
    * -[discovernorthernireland.com](https://www.discovernorthernireland.com/) - Castlerock
    * -[belfastlive.co.uk](https://www.belfastlive.co.uk/) – ballygally – Ireland
    * -[outdoorni.com](https://www.outdoorni.com) – murlough beach
    * -[tripadvisor.co.uk](https://www.tripadvisor.co.uk/) – dinas dinlle beach
    * -[geograph.org.uk](https://www.geograph.org.uk/) – gronant dunes beach
    * -[undiscoveredsctoland.co.uk](https://www.undiscoveredscotland.co.uk/) – borve beach

* Information on regions and Individual beaches
    Majority of textual Information used in each Beach card has been taken from [thebeachguide.co.uk](https://www.thebeachguide.co.uk/) for the beach descriptions. Please bear in mind if the website was going live for actual use a lot of the information used would have to be replaced to avoid any copyright infringements. We are using the textual information just for formatting purposes and to demonstrate features of the site. In actual release original information and data would be used.

* Information on region pages taken from:
    * North England - [Nationaltrust](https://www.nationaltrust.org.uk/lists/beautiful-beaches-in-the-north-of-england)
    * South England - [Visit South England](https://www.visitsoutheastengland.com/south-coast)
    * Ireland - [cntraveller](https://www.cntraveller.com/gallery/top-beaches-in-ireland)
    * Scotland - [visitscotland](https://www.visitscotland.com/see-do/landscapes-nature/beaches/)
    * Wales - [visitwales](https://www.visitwales.com/things-do/nature-landscapes/beaches)

* Booking Agencies
    Some Booking agencies or links to websites are to genuine website to demonstrate functionality and site features – however there is no formal partnership and recommendation been obtained from these service providers.