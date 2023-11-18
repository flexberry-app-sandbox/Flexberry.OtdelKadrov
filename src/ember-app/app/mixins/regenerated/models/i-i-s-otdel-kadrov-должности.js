import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-otdel-kadrov-должности', {
    
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-otdel-kadrov-должности', {
    
  });
};
