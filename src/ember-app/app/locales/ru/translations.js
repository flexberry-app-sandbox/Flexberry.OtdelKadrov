import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOtdel_kadrovГрафикLForm from './forms/i-i-s-otdel-kadrov-график-l';
import IISOtdel_kadrovДолжностиLForm from './forms/i-i-s-otdel-kadrov-должности-l';
import IISOtdel_kadrovНачальникLForm from './forms/i-i-s-otdel-kadrov-начальник-l';
import IISOtdel_kadrovПодразделенияLForm from './forms/i-i-s-otdel-kadrov-подразделения-l';
import IISOtdel_kadrovПриемLForm from './forms/i-i-s-otdel-kadrov-прием-l';
import IISOtdel_kadrovРасчетLForm from './forms/i-i-s-otdel-kadrov-расчет-l';
import IISOtdel_kadrovСотрудникLForm from './forms/i-i-s-otdel-kadrov-сотрудник-l';
import IISOtdel_kadrovУвольнениеLForm from './forms/i-i-s-otdel-kadrov-увольнение-l';
import IISOtdel_kadrovГрафикEForm from './forms/i-i-s-otdel-kadrov-график-e';
import IISOtdel_kadrovДолжностиEForm from './forms/i-i-s-otdel-kadrov-должности-e';
import IISOtdel_kadrovНачальникEForm from './forms/i-i-s-otdel-kadrov-начальник-e';
import IISOtdel_kadrovПодразделенияEForm from './forms/i-i-s-otdel-kadrov-подразделения-e';
import IISOtdel_kadrovПриемEForm from './forms/i-i-s-otdel-kadrov-прием-e';
import IISOtdel_kadrovРасчетEForm from './forms/i-i-s-otdel-kadrov-расчет-e';
import IISOtdel_kadrovСотрудникEForm from './forms/i-i-s-otdel-kadrov-сотрудник-e';
import IISOtdel_kadrovУвольнениеEForm from './forms/i-i-s-otdel-kadrov-увольнение-e';
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

  'application-name': 'Otdel_kadrov',

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
        'application-name': 'Otdel_kadrov',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otdel_kadrov',
          title: 'Otdel_kadrov'
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
        'otdel-kadrov': {
          caption: 'Otdel_kadrov',
          title: 'Otdel_kadrov',
          'i-i-s-otdel-kadrov-график-l': {
            caption: 'График',
            title: ''
          },
          'i-i-s-otdel-kadrov-прием-l': {
            caption: 'Прием',
            title: ''
          },
          'i-i-s-otdel-kadrov-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          },
          'i-i-s-otdel-kadrov-подразделения-l': {
            caption: 'Подразделения',
            title: ''
          },
          'i-i-s-otdel-kadrov-расчет-l': {
            caption: 'Расчет',
            title: ''
          },
          'i-i-s-otdel-kadrov-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-otdel-kadrov-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-otdel-kadrov-начальник-l': {
            caption: 'Начальник',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-otdel-kadrov-сотрудник-l': {
            caption: 'СотрудникL',
            title: 'Сотрудник'
          },
          'i-i-s-otdel-kadrov-подразделения-l': {
            caption: 'ПодразделенияL',
            title: 'Подразделения'
          },
          'i-i-s-otdel-kadrov-должности-l': {
            caption: 'ДолжностиL',
            title: 'Должности'
          }
        }
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
    'i-i-s-otdel-kadrov-график-l': IISOtdel_kadrovГрафикLForm,
    'i-i-s-otdel-kadrov-должности-l': IISOtdel_kadrovДолжностиLForm,
    'i-i-s-otdel-kadrov-начальник-l': IISOtdel_kadrovНачальникLForm,
    'i-i-s-otdel-kadrov-подразделения-l': IISOtdel_kadrovПодразделенияLForm,
    'i-i-s-otdel-kadrov-прием-l': IISOtdel_kadrovПриемLForm,
    'i-i-s-otdel-kadrov-расчет-l': IISOtdel_kadrovРасчетLForm,
    'i-i-s-otdel-kadrov-сотрудник-l': IISOtdel_kadrovСотрудникLForm,
    'i-i-s-otdel-kadrov-увольнение-l': IISOtdel_kadrovУвольнениеLForm,
    'i-i-s-otdel-kadrov-график-e': IISOtdel_kadrovГрафикEForm,
    'i-i-s-otdel-kadrov-должности-e': IISOtdel_kadrovДолжностиEForm,
    'i-i-s-otdel-kadrov-начальник-e': IISOtdel_kadrovНачальникEForm,
    'i-i-s-otdel-kadrov-подразделения-e': IISOtdel_kadrovПодразделенияEForm,
    'i-i-s-otdel-kadrov-прием-e': IISOtdel_kadrovПриемEForm,
    'i-i-s-otdel-kadrov-расчет-e': IISOtdel_kadrovРасчетEForm,
    'i-i-s-otdel-kadrov-сотрудник-e': IISOtdel_kadrovСотрудникEForm,
    'i-i-s-otdel-kadrov-увольнение-e': IISOtdel_kadrovУвольнениеEForm
  },

});

export default translations;
