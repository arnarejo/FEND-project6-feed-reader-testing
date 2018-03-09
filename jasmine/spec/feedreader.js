/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* A test to make sure that the allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This unit test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */

         it('feedURL is defined and not empty', function() {
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

        /* This unit test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */

         it('name is defined and not empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });


    });


    /* a new test suite named "The menu" */
    describe('The menu', function() {

        /* This test ensures that the menu element is
         * hidden by default.
         */
         it('Menu element is hidden by default', function(){
           expect($('body').hasClass('menu-hidden')).not.toBe(false);
         });

         /* This test ensures that the menu is display when
          * clicked and does hide when it is clicked again.
          */
          it('Menu changes visibility when menu icon is clicked', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(false);

          });

        });


    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Check there is is at least a single .entry element within the .feed container.
         */
         beforeEach(function(done){
           loadFeed(0, done);
         });

         it('at least a single entry', function(){
           expect($('.feed .entry').length).toBeGreaterThan(0);
         });

       });

    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      var preLoadedFeed;
      var postLoadedFeed;

      beforeEach(function(done) {
        loadFeed(0, function() {
          preLoadedFeed = $('.feed').html();
          loadFeed(1, function(){
            postLoadedFeed = $('.feed').html();
            done();
          });
        });
      });

      it('a new feed is loaded', function(){
        expect(postLoadedFeed).not.toBe(preLoadedFeed);
      });

       });


}());
