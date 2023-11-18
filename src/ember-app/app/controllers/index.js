import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otdel-kadrov.caption'),
          title: i18n.t('forms.application.sitemap.otdel-kadrov.title'),
          children: [{
            link: 'i-i-s-otdel-kadrov-график-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-график-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-график-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-прием-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-прием-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-прием-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-увольнение-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-увольнение-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-увольнение-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-подразделения-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-подразделения-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-расчет-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-расчет-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-расчет-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-должности-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-должности-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-начальник-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-начальник-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov.i-i-s-otdel-kadrov-начальник-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-otdel-kadrov-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-otdel-kadrov-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-otdel-kadrov-сотрудник-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-подразделения-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-otdel-kadrov-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-otdel-kadrov-подразделения-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-должности-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-otdel-kadrov-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-otdel-kadrov-должности-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})