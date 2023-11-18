import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
