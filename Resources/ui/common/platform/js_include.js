function js_include() {
	Titanium.include('/etc/my_js_include.js', '/etc/my_js_include_2.js', '/etc/local_include.js');
	
	var self = Ti.UI.createWindow();
	
	self.addEventListener('open', function() {

		Ti.UI.createAlertDialog({
			title:'JS Includes',
			message:'first name: ' + myFirstName + ' middle name: ' + myMiddleName +' last name: ' + myLastName
		}).show();
		
	});

	return self;
};

module.exports = js_include;
