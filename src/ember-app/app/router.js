import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otdel-kadrov-график-l');
  this.route('i-i-s-otdel-kadrov-график-e',
  { path: 'i-i-s-otdel-kadrov-график-e/:id' });
  this.route('i-i-s-otdel-kadrov-график-e.new',
  { path: 'i-i-s-otdel-kadrov-график-e/new' });
  this.route('i-i-s-otdel-kadrov-должности-l');
  this.route('i-i-s-otdel-kadrov-должности-e',
  { path: 'i-i-s-otdel-kadrov-должности-e/:id' });
  this.route('i-i-s-otdel-kadrov-должности-e.new',
  { path: 'i-i-s-otdel-kadrov-должности-e/new' });
  this.route('i-i-s-otdel-kadrov-начальник-l');
  this.route('i-i-s-otdel-kadrov-начальник-e',
  { path: 'i-i-s-otdel-kadrov-начальник-e/:id' });
  this.route('i-i-s-otdel-kadrov-начальник-e.new',
  { path: 'i-i-s-otdel-kadrov-начальник-e/new' });
  this.route('i-i-s-otdel-kadrov-подразделения-l');
  this.route('i-i-s-otdel-kadrov-подразделения-e',
  { path: 'i-i-s-otdel-kadrov-подразделения-e/:id' });
  this.route('i-i-s-otdel-kadrov-подразделения-e.new',
  { path: 'i-i-s-otdel-kadrov-подразделения-e/new' });
  this.route('i-i-s-otdel-kadrov-прием-l');
  this.route('i-i-s-otdel-kadrov-прием-e',
  { path: 'i-i-s-otdel-kadrov-прием-e/:id' });
  this.route('i-i-s-otdel-kadrov-прием-e.new',
  { path: 'i-i-s-otdel-kadrov-прием-e/new' });
  this.route('i-i-s-otdel-kadrov-расчет-l');
  this.route('i-i-s-otdel-kadrov-расчет-e',
  { path: 'i-i-s-otdel-kadrov-расчет-e/:id' });
  this.route('i-i-s-otdel-kadrov-расчет-e.new',
  { path: 'i-i-s-otdel-kadrov-расчет-e/new' });
  this.route('i-i-s-otdel-kadrov-сотрудник-l');
  this.route('i-i-s-otdel-kadrov-сотрудник-e',
  { path: 'i-i-s-otdel-kadrov-сотрудник-e/:id' });
  this.route('i-i-s-otdel-kadrov-сотрудник-e.new',
  { path: 'i-i-s-otdel-kadrov-сотрудник-e/new' });
  this.route('i-i-s-otdel-kadrov-увольнение-l');
  this.route('i-i-s-otdel-kadrov-увольнение-e',
  { path: 'i-i-s-otdel-kadrov-увольнение-e/:id' });
  this.route('i-i-s-otdel-kadrov-увольнение-e.new',
  { path: 'i-i-s-otdel-kadrov-увольнение-e/new' });
});

export default Router;
