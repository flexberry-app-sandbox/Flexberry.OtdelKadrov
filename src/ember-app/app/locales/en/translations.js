import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtdel_kadrovГрафикModel from './models/i-i-s-otdel-kadrov-график';
import IISOtdel_kadrovДолжностиModel from './models/i-i-s-otdel-kadrov-должности';
import IISOtdel_kadrovНачальникModel from './models/i-i-s-otdel-kadrov-начальник';
import IISOtdel_kadrovПодразделенияModel from './models/i-i-s-otdel-kadrov-подразделения';
import IISOtdel_kadrovПриемModel from './models/i-i-s-otdel-kadrov-прием';
import IISOtdel_kadrovРасчетModel from './models/i-i-s-otdel-kadrov-расчет';
import IISOtdel_kadrovСотрудникModel from './models/i-i-s-otdel-kadrov-сотрудник';
import IISOtdel_kadrovУвольнениеModel from './models/i-i-s-otdel-kadrov-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otdel-kadrov-график': IISOtdel_kadrovГрафикModel,
    'i-i-s-otdel-kadrov-должности': IISOtdel_kadrovДолжностиModel,
    'i-i-s-otdel-kadrov-начальник': IISOtdel_kadrovНачальникModel,
    'i-i-s-otdel-kadrov-подразделения': IISOtdel_kadrovПодразделенияModel,
    'i-i-s-otdel-kadrov-прием': IISOtdel_kadrovПриемModel,
    'i-i-s-otdel-kadrov-расчет': IISOtdel_kadrovРасчетModel,
    'i-i-s-otdel-kadrov-сотрудник': IISOtdel_kadrovСотрудникModel,
    'i-i-s-otdel-kadrov-увольнение': IISOtdel_kadrovУвольнениеModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
