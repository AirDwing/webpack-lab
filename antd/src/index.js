// You should fork and save if you had updated this CodePend and want to send it to others.
// Note: antd.locales are only support by `dist/antd`
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import moment from 'moment';

moment.locale('en');
const mountNode = document.getElementById('container');

ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment()} />
  </div>
, mountNode);
