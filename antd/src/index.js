// You should fork and save if you had updated this CodePend and want to send it to others.
// Note: antd.locales are only support by `dist/antd`
const React = require('react');
const ReactDOM = require('react-dom');
const { LocaleProvider, DatePicker, locales, version } = require('antd');
const moment = require('moment');

moment.locale('en');
const mountNode = document.getElementById('container');

ReactDOM.render(
  <div>
    <p className="version">antd version: {version}</p>
    <LocaleProvider locale={locales.en_US}>
      <DatePicker defaultValue={moment()} />
    </LocaleProvider>
  </div>
  , mountNode);
