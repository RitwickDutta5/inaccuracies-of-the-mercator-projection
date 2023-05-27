# inaccuracies-of-the-mercator-projection
 This is a webmap displaying the inaccuracies of the mercator projection
 I was inspired by this tweet that led me to visualize this in a webmap: https://twitter.com/tomaspueyo/status/1647026142086324226

 It led me down a rabbit hole to discover the ways in which the maps we see on a everyday basis are actually incorrect.

 The Mercator projection is often criticized for its distortion of the size and shape of land masses as they move away from the equator. This distortion results in an exaggerated size of the polar regions and a compression of the equator, which makes land masses near the equator appear smaller than they actually are. 
 
 https://axbom.com/content/images/size/w1000/2021/12/mercator-map-cylinder-eb.png
![Alt text](https://axbom.com/content/images/size/w1000/2021/12/mercator-map-cylinder-eb.png)

 It is due to the fact that the Mercator projection stretches the map to create a rectangular shape, which causes the distortion of areas far from the equator. This distortion can lead to a Eurocentric bias, as it tends to make Europe and North America appear larger than they actually are, while downplaying the size of Africa, South America, and other regions in the Global South. 
 
 The Mercator projection has also been criticized for its lack of accuracy in representing the distances between places, particularly in high latitudes, which I have chosen to display in my webmap. 
 ![Alt text](https://axbom.com/content/images/2021/12/map-distances-mercator-africa-russia.png)

 The Mercator projection is still widely used today for several reasons. First, it is a familiar and easily recognizable map projection, making it useful for educational purposes and for communicating geographical information to a wide audience. 
 Second, the Mercator projection is still considered a reliable navigational tool for maritime purposes, as it accurately preserves angles and directions, which is important for plotting courses and calculating distances. Third, despite its flaws, the Mercator projection can still be useful for certain types of analysis, such as comparing the sizes of land masses that are located at similar latitudes. 
 Finally, many existing maps, atlases, and other geographic resources use the Mercator projection, so it can be challenging to switch to a different projection system without significant retooling and expense.

 To undertake this project, I used the flatmap mercator projection rather than using the globe projection to make the distances easier to compare. 
 
I split my code and annotated it to make it easier to follow and replicable. 

I added an accordion feature to make it more interactive and create a call to action for the user to explore this further. 

 I color coded the lines with the buttons to create similarites and used the buttons to try and tell a story. 

 My final project is linked here:
 https://ritwickdutta5.github.io/inaccuracies-of-the-mercator-projection/
 
