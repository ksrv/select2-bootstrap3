Package.describe({
  name: 'ksrv:select2-bootstrap3',
  version: '0.0.1',
  summary: 'Select2 Bootstrap3 theme wrapper',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  // api.use('ecmascript');

  api.addFiles('select2-bootstrap-theme/dist/select2-bootstrap.css', ['client']);
});
