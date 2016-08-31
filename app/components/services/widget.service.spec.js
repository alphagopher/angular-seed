describe('Widget Service', function() {
	var widgetService;

  // Before each test load our api.users module
	beforeEach(angular.mock.module('myApp', ['ui.bootstrap', 'ui.router', 'smart-table']));
  //Need to figure out how to mock dependencies

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_widgetService_) {
  	widgetService = _widgetService_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
  	expect(widgetService).toBeDefined();
  });
});
